import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { store } from "@/data/store";
import { docsNav } from "@/lib/docs-nav";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P, Ul } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";

export const metadata: Metadata = { title: "Giới thiệu · Cẩm nang DEV PỒ" };

export default function HomePage() {
  return (
    <DocPage
      title="Cẩm nang nội bộ DEV PỒ"
      description="Cẩm nang sản phẩm & quy trình kinh doanh — tài liệu dành cho nhân viên: học sản phẩm, tra cứu nhanh và kiểm tra kiến thức."
    >
      <H2 id="dinh-huong-san-pham">Định hướng sản phẩm chủ yếu</H2>
      <Ul>
        {store.focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </Ul>
      <Callout variant="note">
        <p>
          Mọi thông tin giá, phí và chính sách trong tài liệu này bám sát cẩm
          nang gốc của cửa hàng. Khi có mâu thuẫn, luôn lấy theo bản cập nhật
          mới nhất từ quản lý.
        </p>
      </Callout>

      <H2 id="noi-dung-tai-lieu">Nội dung tài liệu</H2>
      <P>
        Tài liệu chia thành ba nhóm — dùng sidebar bên trái, hoặc nhấn{" "}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>{" "}
        để tìm nhanh bất kỳ nội dung nào.
      </P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {docsNav.flatMap((group) =>
          group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {group.title}
              </p>
              <p className="mt-1 flex items-center gap-1 font-semibold">
                {item.title}
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
              {item.desc && (
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              )}
            </Link>
          ))
        )}
      </div>
    </DocPage>
  );
}
