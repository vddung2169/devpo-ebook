import { SectionHeading } from "@/components/Card";
import { Quiz } from "@/components/Quiz";

export default function TestPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Đào tạo · Kiểm tra"
        title="Test nhân viên"
        desc="Bài kiểm tra trắc nghiệm ngẫu nhiên dựa trên nội dung cẩm nang. Chọn đáp án, nộp bài và xem giải thích chi tiết."
      />
      <Quiz />
    </div>
  );
}
