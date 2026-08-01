"use client";

import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { questions as allQuestions } from "@/data/questions";
import type { QuizQuestion } from "@/types";
import { QuestionCard } from "./QuestionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const QUIZ_SIZE = 30;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Quiz() {
  const [seed, setSeed] = useState(0);
  const quiz = useMemo<QuizQuestion[]>(
    () =>
      shuffle(allQuestions).slice(0, Math.min(QUIZ_SIZE, allQuestions.length)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  );

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quiz.length).fill(null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(
    Array(quiz.length).fill(false),
  );
  const [finished, setFinished] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;
  const completion = (answeredCount / quiz.length) * 100;
  const score = quiz.reduce(
    (s, q, i) => (answers[i] === q.correctAnswer ? s + 1 : s),
    0,
  );

  const restart = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setAnswers(Array(QUIZ_SIZE).fill(null));
    setRevealed(Array(QUIZ_SIZE).fill(false));
    setFinished(false);
  };

  const select = (i: number) => {
    if (revealed[index]) return;
    setAnswers((prev) => prev.map((a, k) => (k === index ? i : a)));
  };

  const reveal = () =>
    setRevealed((prev) => prev.map((r, k) => (k === index ? true : r)));

  const next = () => {
    if (index < quiz.length - 1) setIndex(index + 1);
    else setFinished(true);
  };

  if (finished) {
    const pct = Math.round((score / quiz.length) * 100);
    const tone =
      pct >= 80 ? "success" : pct >= 50 ? "warning" : ("destructive" as const);
    const msg =
      pct >= 80
        ? "Xuất sắc! Bạn đã nắm vững cẩm nang."
        : pct >= 50
          ? "Khá ổn — ôn lại các phần sai để chắc hơn."
          : "Cần ôn lại kỹ phần Kiến thức và Chính sách.";

    return (
      <div className="space-y-6">
        <div className="rounded-lg border p-6 text-center sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Kết quả
          </p>
          <p className="my-3 text-5xl font-bold">
            {score}
            <span className="text-2xl text-muted-foreground">
              /{quiz.length}
            </span>
          </p>
          <Badge variant={tone}>{pct}% đúng</Badge>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            {msg}
          </p>
          <Button onClick={restart} className="mt-6">
            <RotateCcw /> Làm lại bộ câu hỏi mới
          </Button>
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
                  {answers[i] === q.correctAnswer ? (
                    <Badge variant="success">Đúng</Badge>
                  ) : (
                    <Badge variant="destructive">Sai</Badge>
                  )}
                </div>
                <QuestionCard
                  question={q}
                  selected={answers[i]}
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

  const current = quiz[index];

  return (
    <div className="space-y-5">
      <div className="rounded-lg border p-3">
        <div className="mb-2 flex items-center justify-between px-1 text-sm">
          <span className="font-semibold">
            Câu {index + 1}
            <span className="text-muted-foreground">/{quiz.length}</span>
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Hoàn thành {Math.round(completion)}%
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
            onClick={() => setIndex(Math.max(0, index - 1))}
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
              {index === quiz.length - 1 ? "Xem kết quả" : "Câu tiếp"}
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
