"use client";

import type { QuizQuestion } from "@/types";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

const diffVariant = { Dễ: "green", "Trung bình": "amber", Khó: "red" } as const;
const letters = ["A", "B", "C", "D", "E"];

export function QuestionCard({
  question,
  selected,
  onSelect,
  revealed,
}: {
  question: QuizQuestion;
  selected: number | null;
  onSelect: (i: number) => void;
  revealed: boolean;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="brand">{question.category}</Badge>
        <Badge variant={diffVariant[question.difficulty]}>{question.difficulty}</Badge>
      </div>
      <h2 className="mb-5 font-display text-lg font-bold leading-snug sm:text-xl">
        {question.question}
      </h2>
      <div className="space-y-2.5">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctAnswer;
          const isPicked = i === selected;
          let cls =
            "surface hairline hover:bg-[var(--surface-2)] hover:border-brand-500/40";
          if (revealed) {
            if (isCorrect)
              cls = "border-emerald-500/60 bg-emerald-500/10";
            else if (isPicked)
              cls = "border-red-500/60 bg-red-500/10";
            else cls = "hairline opacity-70";
          } else if (isPicked) {
            cls = "border-brand-500 bg-brand-500/10";
          }
          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => onSelect(i)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all focus-visible:focus-ring disabled:cursor-default ${cls}`}
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold ${
                  revealed && isCorrect
                    ? "bg-emerald-500 text-white"
                    : revealed && isPicked
                    ? "bg-red-500 text-white"
                    : isPicked
                    ? "bg-brand-500 text-white"
                    : "surface-2"
                }`}
              >
                {letters[i]}
              </span>
              <span className="flex-1">{opt}</span>
              {revealed && isCorrect && (
                <Icon name="check" size={16} className="text-emerald-500" />
              )}
              {revealed && isPicked && !isCorrect && (
                <Icon name="x" size={16} className="text-red-500" />
              )}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="surface-2 mt-4 rounded-xl p-4 text-sm leading-relaxed animate-fade-up">
          <span className="font-semibold text-brand-600 dark:text-brand-400">
            Giải thích:{" "}
          </span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
