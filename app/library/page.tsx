import * as React from "react";
import type { Metadata } from "next";
import { ExternalLink, PlayCircle } from "lucide-react";

import { officialLinks, videoLibrary } from "@/data/knowledge";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P, Ul } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";

export const metadata: Metadata = { title: "Thư viện hướng dẫn" };

export default function LibraryPage() {
  return (
    <DocPage
      title="Thư viện hướng dẫn"
      description="Tổng hợp video iPhone Lock / Quốc tế / iPad / MDM 2026 — gửi cho khách khi cần hỗ trợ kỹ thuật hoặc để nhân viên hiểu rõ sản phẩm."
    >
      <H2 id="link-chinh-thuc">Link chính thức</H2>
      <Ul>
        {officialLinks.map((l) => (
          <li key={l.url}>
            {l.title}:{" "}
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
            >
              {l.url.replace(/^https?:\/\//, "")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </Ul>
      <Callout variant="note">
        <p>
          Khi khách cần hỗ trợ kỹ thuật, tìm đúng chủ đề bên dưới và gửi link
          video tương ứng.
        </p>
      </Callout>

      {videoLibrary.map((section) => (
        <React.Fragment key={section.id}>
          <H2 id={section.id}>{section.title}</H2>
          <Ul>
            {section.topics.map((t) => (
              <li key={t.topic}>
                <P className="mb-1 font-medium">{t.topic}</P>
                <ul className="ml-1 space-y-1">
                  {t.urls.map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4"
                      >
                        <PlayCircle className="h-4 w-4 shrink-0" />
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Ul>
        </React.Fragment>
      ))}
    </DocPage>
  );
}
