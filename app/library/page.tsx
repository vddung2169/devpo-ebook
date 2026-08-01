import type { Metadata } from "next";
import { ExternalLink, PlayCircle } from "lucide-react";

import { guideLinks, videoLinks, mdmVideoLinks } from "@/data/knowledge";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P, Ul } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";

export const metadata: Metadata = { title: "Thư viện hướng dẫn" };

export default function LibraryPage() {
  return (
    <DocPage
      title="Thư viện hướng dẫn"
      description="Các link hướng dẫn gửi cho khách khi cần hỗ trợ kỹ thuật và video quan trọng để hiểu rõ sản phẩm."
    >
      <H2 id="link-cho-khach">Link hướng dẫn cho khách</H2>
      <P>Khi khách hàng cần hỗ trợ kỹ thuật, gửi đường link tương ứng:</P>
      <Ul>
        {guideLinks.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </Ul>

      <H2 id="video-mdm-lock">Tổng hợp về MDM &amp; Lock</H2>
      <Ul>
        {mdmVideoLinks.map((v) => (
          <li key={v.title}>
            {v.url ? (
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
              >
                {v.title}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span>
                {v.title}{" "}
                <span className="text-xs text-muted-foreground">
                  (link đang cập nhật)
                </span>
              </span>
            )}
          </li>
        ))}
      </Ul>
      <Callout variant="note">
        <p>
          Link video MDM đang chờ quản lý bổ sung — sẽ cập nhật vào trang này
          ngay khi có.
        </p>
      </Callout>

      <H2 id="video-iphone-lock">Thông tin, kiến thức về iPhone Lock</H2>
      <P>
        Tập hợp video quan trọng để nhân viên (và khách hàng) hiểu rõ về sản
        phẩm:
      </P>
      <Ul>
        {videoLinks.map((url) => (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4"
            >
              <PlayCircle className="h-4 w-4" />
              {url}
            </a>
          </li>
        ))}
      </Ul>
    </DocPage>
  );
}
