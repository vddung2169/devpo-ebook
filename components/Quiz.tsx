"use client";

import { useMemo, useState } from "react";
import { questions as allQuestions } from "@/data/questions";
import type { QuizQuestion } from "@/types";
import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./Card";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

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
    const tone = pct >= 80 ? "green" : pct >= 50 ? "amber" : "red";
    const msg =
      pct >= 80
        ? "Xuất sắc! Bạn đã nắm vững cẩm nang."
        : pct >= 50
          ? "Khá ổn — ôn lại các phần sai để chắc hơn."
          : "Cần ôn lại kỹ phần Kiến thức và Chính sách.";

    return (
      <div className="space-y-6">
        <div className="surface rounded-2xl border p-6 text-center shadow-card sm:p-8">
          <div className="muted font-mono text-xs uppercase tracking-widest">
            Kết quả
          </div>
          <div className="my-3 font-display text-5xl font-extrabold">
            {score}
            <span className="muted text-2xl">/{quiz.length}</span>
          </div>
          <Badge variant={tone}>{pct}% đúng</Badge>
          <p className="muted mx-auto mt-4 max-w-md text-sm">{msg}</p>
          <button
            onClick={restart}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:focus-ring"
          >
            <Icon name="arrow" size={16} /> Làm lại bộ câu hỏi mới
          </button>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">
            Xem lại đáp án
          </h3>
          <div className="space-y-5">
            {quiz.map((q, i) => (
              <div
                key={q.id}
                className="surface rounded-2xl border p-5 shadow-card"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="muted font-mono text-xs">Câu {i + 1}</span>
                  {answers[i] === q.correctAnswer ? (
                    <Badge variant="green">Đúng</Badge>
                  ) : (
                    <Badge variant="red">Sai</Badge>
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
      <div className="surface rounded-2xl border p-3 shadow-card">
        <div className="mb-2 flex items-center justify-between px-1 text-sm">
          <span className="font-semibold">
            Câu {index + 1}
            <span className="muted">/{quiz.length}</span>
          </span>
          <span className="muted font-mono text-xs">
            Hoàn thành {Math.round(completion)}%
          </span>
        </div>
        <ProgressBar value={completion} />
      </div>

      <div className="surface rounded-2xl border p-5 shadow-card sm:p-7">
        <QuestionCard
          question={current}
          selected={answers[index]}
          onSelect={select}
          revealed={revealed[index]}
        />

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            className="muted rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--text)] disabled:opacity-40"
          >
            ← Trước
          </button>

          {!revealed[index] ? (
            <button
              onClick={reveal}
              disabled={answers[index] === null}
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:focus-ring disabled:opacity-40"
            >
              Kiểm tra đáp án
            </button>
          ) : (
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:focus-ring"
            >
              {index === quiz.length - 1 ? "Xem kết quả" : "Câu tiếp"}
              <Icon name="arrow" size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
