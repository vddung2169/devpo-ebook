"use client";

import { Check, X } from "lucide-react";

import type { QuizQuestion } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const diffVariant = {
  Dễ: "success",
  "Trung bình": "warning",
  Khó: "destructive",
} as const;
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
        <Badge variant="secondary">{question.category}</Badge>
        <Badge variant={diffVariant[question.difficulty]}>
          {question.difficulty}
        </Badge>
      </div>
      <h2 className="mb-5 text-lg font-semibold leading-snug sm:text-xl">
        {question.question}
      </h2>
      <div className="space-y-2.5">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctAnswer;
          const isPicked = i === selected;
          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => onSelect(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-default",
                !revealed && !isPicked && "hover:bg-accent",
                !revealed && isPicked && "border-primary bg-accent",
                revealed &&
                  isCorrect &&
                  "border-emerald-500/60 bg-emerald-500/10",
                revealed &&
                  isPicked &&
                  !isCorrect &&
                  "border-destructive/60 bg-destructive/10",
                revealed && !isCorrect && !isPicked && "opacity-60"
              )}
            >
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-md font-mono text-xs font-bold",
                  revealed && isCorrect
                    ? "bg-emerald-600 text-white"
                    : revealed && isPicked
                      ? "bg-destructive text-destructive-foreground"
                      : isPicked
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                )}
              >
                {letters[i]}
              </span>
              <span className="flex-1">{opt}</span>
              {revealed && isCorrect && (
                <Check className="h-4 w-4 text-emerald-600" />
              )}
              {revealed && isPicked && !isCorrect && (
                <X className="h-4 w-4 text-destructive" />
              )}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-4 animate-fade-up rounded-lg bg-muted p-4 text-sm leading-relaxed">
          <span className="font-semibold">Giải thích: </span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
