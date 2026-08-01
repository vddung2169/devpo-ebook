import type { Metadata } from "next";

import { procedures } from "@/data/procedures";
import { DocPage } from "@/components/docs/doc-page";
import { H2 } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";

export const metadata: Metadata = { title: "Quy trình OFFLINE" };

export default function ProcessOfflinePage() {
  const procedure = procedures.find((p) => p.id === "offline")!;

  return (
    <DocPage
      title="Quy trình OFFLINE — Bán hàng tại cửa hàng"
      description="Quy trình làm việc chuẩn nhân viên phải tuân thủ khi bán hàng, gửi/nhận đơn và báo cáo cuối ca."
    >
      {procedure.sections.map((section) => (
        <section key={section.title}>
          <H2 id={section.title}>{section.title}</H2>
          <Steps>
            {section.steps.map((step) => (
              <Step key={step.code + step.title} label={step.code} title={step.title}>
                {step.points.length > 0 && (
                  <ul>
                    {step.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </Step>
            ))}
          </Steps>
        </section>
      ))}

      <Callout variant="warning" title="Báo cáo chốt ca">
        <p>
          Nếu tồn kho trên web và tồn thực tế LỆCH nhau, bắt buộc phải giải
          trình lý do trong báo cáo cuối ca.
        </p>
      </Callout>
    </DocPage>
  );
}
