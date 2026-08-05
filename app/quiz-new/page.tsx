import type { Metadata } from "next";

import { Quiz } from "@/components/Quiz";
import { DocPage } from "@/components/docs/doc-page";
import { questionsNew } from "@/data/questions-new";

export const metadata: Metadata = { title: "Test nhân viên — Bộ đề mới" };

export default function QuizNewPage() {
  return (
    <DocPage
      title="Test nhân viên — Bộ đề mới"
      description="Bộ đề số 2 gồm 30 câu hỏi mới dựa trên nội dung cẩm nang. Chọn đáp án, kiểm tra và xem giải thích chi tiết."
      hideToc
    >
      <Quiz
        questions={questionsNew}
        storageKey="devpo-quiz-new-session-v1"
        quizLabel="Bộ đề mới"
      />
    </DocPage>
  );
}
