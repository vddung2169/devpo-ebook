import type { Metadata } from "next";

import { procedures } from "@/data/procedures";
import { DocPage } from "@/components/docs/doc-page";
import { H2 } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";

export const metadata: Metadata = { title: "Quy trình ONLINE" };

export default function ProcessOnlinePage() {
  const procedure = procedures.find((p) => p.id === "online")!;

  return (
    <DocPage
      title="Quy trình ONLINE — Bán hàng từ xa"
      description="Quy trình chốt đơn online, form check máy khách và form tiếp nhận bảo hành / độ SIM."
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

      <Callout variant="note" title="Xác nhận khi nhận tiền">
        <p>
          Khi nhận tiền / cọc, nhân viên xác nhận lại với khách theo mẫu:
          &quot;Shop đã nhận tiền / cọc của anh/chị [Tên] cho đơn [Tên
          máy].&quot;
        </p>
      </Callout>
    </DocPage>
  );
}
