"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CloudUpload,
  Loader2,
  RotateCcw,
  TriangleAlert,
  User,
} from "lucide-react";

import { questions as allQuestions } from "@/data/questions";
import type { QuizQuestion } from "@/types";
import { QuestionCard } from "./QuestionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Callout } from "@/components/docs/callout";

const QUIZ_SIZE = 30;
const DEFAULT_STORAGE_KEY = "devpo-quiz-session-v1";
const PERSON_KEY = "devpo-quiz-person-v1";

interface QuizProps {
  /** Bộ câu hỏi dùng cho bài test — mặc định là bộ gốc data/questions.ts */
  questions?: QuizQuestion[];
  /** Key localStorage riêng cho từng bộ đề để bài làm dở không đè lên nhau */
  storageKey?: string;
  /** Tên bộ đề ghi kèm vào Google Sheet (cột "Bộ đề") */
  quizLabel?: string;
}

interface QuizSession {
  sessionId: string;
  name: string;
  phone: string;
  questionIds: string[];
  answers: (number | null)[];
  revealed: boolean[];
  index: number;
  startedAt: number;
  /** Số lần thoát / tải lại trang giữa chừng bài làm */
  refreshCount: number;
}

type Phase = "intro" | "running" | "finished";
type SubmitState = "saving" | "saved" | "error";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function newSessionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function loadSession(storageKey: string): QuizSession | null {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    const s = JSON.parse(raw) as QuizSession;
    if (!s.sessionId || !Array.isArray(s.questionIds)) return null;
    return s;
  } catch {
    return null;
  }
}

function persistSession(storageKey: string, s: QuizSession) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(s));
  } catch {
    // localStorage đầy / bị chặn — bài vẫn làm được, chỉ mất khả năng khôi phục
  }
}

function clearSession(storageKey: string) {
  try {
    localStorage.removeItem(storageKey);
  } catch {}
}

/** Gửi sự kiện sang API (fire-and-forget, không chặn bài làm khi lỗi mạng) */
function track(payload: Record<string, unknown>) {
  fetch("/api/quiz-result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function formatElapsed(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function Quiz({
  questions = allQuestions,
  storageKey = DEFAULT_STORAGE_KEY,
  quizLabel = "Bộ gốc",
}: QuizProps = {}) {
  const questionById = useMemo(
    () => new Map(questions.map((q) => [q.id, q])),
    [questions]
  );
  const [phase, setPhase] = useState<Phase>("intro");
  const [session, setSession] = useState<QuizSession | null>(null);
  const [resumed, setResumed] = useState(false);
  const [restoring, setRestoring] = useState(true);

  // Form thông tin
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState("");

  // Trạng thái nộp kết quả lên Google Sheet
  const [submitState, setSubmitState] = useState<SubmitState>("saving");
  const finishedAtRef = useRef<number>(0);

  // Đồng hồ thời gian làm bài
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // Khôi phục bài làm dở khi mở lại / tải lại trang (chống làm lại từ đầu)
  useEffect(() => {
    const saved = loadSession(storageKey);
    if (saved) {
      const restored = { ...saved, refreshCount: saved.refreshCount + 1 };
      persistSession(storageKey, restored);
      setSession(restored);
      setName(restored.name);
      setPhone(restored.phone);
      setPhase("running");
      setResumed(true);
      track({
        type: "progress",
        quiz: quizLabel,
        sessionId: restored.sessionId,
        answered: restored.revealed.filter(Boolean).length,
        refreshCount: restored.refreshCount,
      });
    } else {
      try {
        const person = JSON.parse(localStorage.getItem(PERSON_KEY) ?? "null");
        if (person?.name) setName(person.name);
        if (person?.phone) setPhone(person.phone);
      } catch {}
    }
    setRestoring(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const quiz = useMemo<QuizQuestion[]>(
    () =>
      session
        ? session.questionIds
            .map((id) => questionById.get(id))
            .filter((q): q is QuizQuestion => Boolean(q))
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session?.sessionId, session?.questionIds, questionById]
  );

  const update = (patch: Partial<QuizSession>) => {
    setSession((prev) => {
      if (!prev) return prev;
      const nextSession = { ...prev, ...patch };
      persistSession(storageKey, nextSession);
      return nextSession;
    });
  };

  const start = () => {
    const cleanName = name.trim().replace(/\s+/g, " ");
    const cleanPhone = phone.replace(/[\s.-]/g, "");
    if (cleanName.length < 2) {
      setFormError("Vui lòng nhập họ tên đầy đủ.");
      return;
    }
    if (!/^0\d{8,10}$/.test(cleanPhone)) {
      setFormError("Số điện thoại không hợp lệ (bắt đầu bằng 0, 9–11 số).");
      return;
    }
    setFormError("");
    try {
      localStorage.setItem(
        PERSON_KEY,
        JSON.stringify({ name: cleanName, phone: cleanPhone })
      );
    } catch {}

    const picked = shuffle(questions).slice(
      0,
      Math.min(QUIZ_SIZE, questions.length)
    );
    const s: QuizSession = {
      sessionId: newSessionId(),
      name: cleanName,
      phone: cleanPhone,
      questionIds: picked.map((q) => q.id),
      answers: Array(picked.length).fill(null),
      revealed: Array(picked.length).fill(false),
      index: 0,
      startedAt: Date.now(),
      refreshCount: 0,
    };
    persistSession(storageKey, s);
    setSession(s);
    setResumed(false);
    setPhase("running");
    track({
      type: "start",
      quiz: quizLabel,
      sessionId: s.sessionId,
      name: s.name,
      phone: s.phone,
      startedAt: s.startedAt,
      total: picked.length,
    });
  };

  const select = (i: number) => {
    if (!session || session.revealed[session.index]) return;
    update({
      answers: session.answers.map((a, k) => (k === session.index ? i : a)),
    });
  };

  const reveal = () => {
    if (!session) return;
    const revealed = session.revealed.map((r, k) =>
      k === session.index ? true : r
    );
    update({ revealed });
    track({
      type: "progress",
      quiz: quizLabel,
      sessionId: session.sessionId,
      answered: revealed.filter(Boolean).length,
      refreshCount: session.refreshCount,
    });
  };

  const finish = async () => {
    if (!session) return;
    const finishedAt = Date.now();
    finishedAtRef.current = finishedAt;
    const score = quiz.reduce(
      (s, q, i) => (session.answers[i] === q.correctAnswer ? s + 1 : s),
      0
    );
    clearSession(storageKey);
    setPhase("finished");
    setSubmitState("saving");
    try {
      const res = await fetch("/api/quiz-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "finish",
          quiz: quizLabel,
          sessionId: session.sessionId,
          name: session.name,
          phone: session.phone,
          startedAt: session.startedAt,
          finishedAt,
          durationSeconds: Math.round((finishedAt - session.startedAt) / 1000),
          score,
          total: quiz.length,
          percent: Math.round((score / quiz.length) * 100),
          answered: session.revealed.filter(Boolean).length,
          refreshCount: session.refreshCount,
        }),
        keepalive: true,
      });
      const data = await res.json().catch(() => ({ ok: false }));
      setSubmitState(res.ok && data.ok !== false ? "saved" : "error");
    } catch {
      setSubmitState("error");
    }
  };

  const next = () => {
    if (!session) return;
    if (session.index < quiz.length - 1) update({ index: session.index + 1 });
    else void finish();
  };

  if (restoring) {
    return (
      <div className="flex items-center gap-2 rounded-lg border p-6 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" /> Đang tải bài kiểm tra…
      </div>
    );
  }

  // ---------- Màn hình nhập thông tin ----------
  if (phase === "intro") {
    return (
      <div className="max-w-md space-y-5">
        <div className="rounded-lg border p-6">
          <p className="mb-1 flex items-center gap-2 font-semibold">
            <User className="h-4 w-4" /> Thông tin nhân viên
          </p>
          <p className="mb-5 text-sm text-muted-foreground">
            Điền đúng họ tên và số điện thoại — kết quả bài test sẽ được ghi
            nhận về hệ thống của quản lý.
          </p>
          <div className="space-y-3">
            <div>
              <label htmlFor="quiz-name" className="mb-1.5 block text-sm font-medium">
                Họ và tên <span className="text-destructive">*</span>
              </label>
              <Input
                id="quiz-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="quiz-phone" className="mb-1.5 block text-sm font-medium">
                Số điện thoại <span className="text-destructive">*</span>
              </label>
              <Input
                id="quiz-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0xxxxxxxxx"
                inputMode="numeric"
                autoComplete="tel"
              />
            </div>
            {formError && (
              <p className="text-sm text-destructive">{formError}</p>
            )}
            <Button className="w-full" onClick={start}>
              Bắt đầu làm bài ({Math.min(QUIZ_SIZE, questions.length)} câu)
              <ArrowRight />
            </Button>
          </div>
        </div>
        <Callout variant="note" title="Quy định làm bài">
          <ul>
            <li>
              Bài làm được lưu tự động — tải lại trang sẽ tiếp tục đúng câu
              đang làm, <strong>không thể làm lại từ đầu</strong>.
            </li>
            <li>
              Hệ thống ghi nhận thời gian làm bài và số lần thoát / tải lại
              trang.
            </li>
          </ul>
        </Callout>
      </div>
    );
  }

  if (!session || quiz.length === 0) return null;

  // ---------- Màn hình kết quả ----------
  if (phase === "finished") {
    const score = quiz.reduce(
      (s, q, i) => (session.answers[i] === q.correctAnswer ? s + 1 : s),
      0
    );
    const pct = Math.round((score / quiz.length) * 100);
    const tone =
      pct >= 80 ? "success" : pct >= 50 ? "warning" : ("destructive" as const);
    const msg =
      pct >= 80
        ? "Xuất sắc! Bạn đã nắm vững cẩm nang."
        : pct >= 50
          ? "Khá ổn — ôn lại các phần sai để chắc hơn."
          : "Cần ôn lại kỹ phần Kiến thức và Chính sách.";
    const durationSeconds = Math.round(
      (finishedAtRef.current - session.startedAt) / 1000
    );

    return (
      <div className="space-y-6">
        <div className="rounded-lg border p-6 text-center sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Kết quả — {session.name} · {session.phone}
          </p>
          <p className="my-3 text-5xl font-bold">
            {score}
            <span className="text-2xl text-muted-foreground">
              /{quiz.length}
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant={tone}>{pct}% đúng</Badge>
            <Badge variant="secondary">
              Thời gian: {formatElapsed(durationSeconds)}
            </Badge>
            {session.refreshCount > 0 && (
              <Badge variant="warning">
                Tải lại trang: {session.refreshCount} lần
              </Badge>
            )}
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            {msg}
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm">
            {submitState === "saving" && (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                <span className="text-muted-foreground">
                  Đang lưu kết quả về hệ thống…
                </span>
              </>
            )}
            {submitState === "saved" && (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-600">
                  Đã lưu kết quả về hệ thống.
                </span>
              </>
            )}
            {submitState === "error" && (
              <>
                <TriangleAlert className="h-4 w-4 text-destructive" />
                <span className="text-destructive">
                  Chưa lưu được kết quả — chụp màn hình này gửi quản lý.
                </span>
              </>
            )}
          </p>

          <div className="mt-6">
            <Button onClick={start}>
              <RotateCcw /> Làm lại bộ câu hỏi mới
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Xem lại đáp án</h3>
          <div className="space-y-5">
            {quiz.map((q, i) => (
              <div key={q.id} className="rounded-lg border p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    Câu {i + 1}
                  </span>
                  {session.answers[i] === q.correctAnswer ? (
                    <Badge variant="success">Đúng</Badge>
                  ) : (
                    <Badge variant="destructive">Sai</Badge>
                  )}
                </div>
                <QuestionCard
                  question={q}
                  selected={session.answers[i]}
                  onSelect={() => {}}
                  revealed
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------- Màn hình làm bài ----------
  const { index, answers, revealed } = session;
  const answeredCount = revealed.filter(Boolean).length;
  const completion = (answeredCount / quiz.length) * 100;
  const elapsed = Math.max(0, Math.round((now - session.startedAt) / 1000));
  const current = quiz[index];

  return (
    <div className="space-y-5">
      {resumed && (
        <Callout variant="warning" title="Đã khôi phục bài làm">
          <p>
            Bạn đã tải lại / thoát trang giữa chừng — bài làm tiếp tục tại đúng
            vị trí cũ. Số lần tải lại được ghi nhận:{" "}
            <strong>{session.refreshCount}</strong>.
          </p>
        </Callout>
      )}

      <div className="rounded-lg border p-3">
        <div className="mb-2 flex items-center justify-between px-1 text-sm">
          <span className="font-semibold">
            Câu {index + 1}
            <span className="text-muted-foreground">/{quiz.length}</span>
          </span>
          <span className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>⏱ {formatElapsed(elapsed)}</span>
            <span>Hoàn thành {Math.round(completion)}%</span>
          </span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={Math.round(completion)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 w-full overflow-hidden rounded-full bg-muted"
        >
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${completion}%` }}
          />
        </div>
        <p className="mt-2 flex items-center gap-1.5 px-1 text-xs text-muted-foreground">
          <CloudUpload className="h-3.5 w-3.5" />
          {session.name} · {session.phone} — bài làm tự lưu, kết quả gửi về
          quản lý khi nộp.
        </p>
      </div>

      <div className="rounded-lg border p-5 sm:p-7">
        <QuestionCard
          question={current}
          selected={answers[index]}
          onSelect={select}
          revealed={revealed[index]}
        />

        <div className="mt-6 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            onClick={() => update({ index: Math.max(0, index - 1) })}
            disabled={index === 0}
          >
            ← Trước
          </Button>

          {!revealed[index] ? (
            <Button onClick={reveal} disabled={answers[index] === null}>
              Kiểm tra đáp án
            </Button>
          ) : (
            <Button onClick={next}>
              {index === quiz.length - 1 ? "Nộp bài & xem kết quả" : "Câu tiếp"}
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
