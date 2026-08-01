import type { Metadata } from "next";

import { troubleshooting } from "@/data/troubleshooting";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P, Ul } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "CSKH & Xử lý sự cố" };

export default function SupportPage() {
  return (
    <DocPage
      title="CSKH & Xử lý sự cố"
      description="Các quy trình xử lý nhanh khi khách hàng báo lỗi — đảm bảo chất lượng dịch vụ và phản hồi kịp thời."
    >
      {troubleshooting.map((item, i) => (
        <section key={item.id} id={item.id}>
          <H2 id={`su-co-${i + 1}`}>
            {i + 1}. {item.issue}
          </H2>
          <p className="mt-2">
            <Badge variant="outline">{item.category}</Badge>
          </p>
          {item.cause && (
            <P>
              <strong>Nguyên nhân:</strong> {item.cause}
            </P>
          )}
          <P>
            <strong>Cách xử lý:</strong>
          </P>
          <Ul>
            {item.fix.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </Ul>
        </section>
      ))}

      <Callout variant="tip" title="Khi cả 3 cách đều không được">
        <p>
          Với lỗi không nhận SIM / không có sóng: nếu khách đã thử đủ 3 cách mà
          vẫn không được, yêu cầu khách gửi lại máy để kiểm tra (bảo hành).
        </p>
      </Callout>
    </DocPage>
  );
}
