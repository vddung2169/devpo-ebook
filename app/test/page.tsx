import type { Metadata } from "next";

import { Quiz } from "@/components/Quiz";
import { DocPage } from "@/components/docs/doc-page";

export const metadata: Metadata = { title: "Test nhân viên" };

export default function TestPage() {
  return (
    <DocPage
      title="Test nhân viên"
      description="Bài kiểm tra trắc nghiệm ngẫu nhiên dựa trên nội dung cẩm nang. Chọn đáp án, kiểm tra và xem giải thích chi tiết."
      hideToc
    >
      <Quiz />
    </DocPage>
  );
}
