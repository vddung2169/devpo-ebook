import type { Metadata } from "next";

import { store, phoneTypes } from "@/data/store";
import { DocPage } from "@/components/docs/doc-page";
import { H2, H3, P, Ul } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Tổng quan & phân loại máy" };

const badgeVariant = {
  green: "success",
  blue: "info",
  amber: "warning",
  red: "destructive",
  slate: "secondary",
} as const;

export default function ProductsPage() {
  return (
    <DocPage
      title="Tổng quan & phân loại máy"
      description="Thông tin tổng quan và đặc điểm của các loại sản phẩm iPhone đang kinh doanh tại cửa hàng."
    >
      <H2 id="dinh-huong">1.1. Định hướng sản phẩm chủ yếu</H2>
      <Ul>
        {store.focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </Ul>

      <H2 id="phan-loai">1.2. Phân loại sản phẩm</H2>
      <P>
        Có 4 loại máy chính. Nắm chắc khác biệt giữa chúng là nền tảng để tư
        vấn đúng cho khách.
      </P>

      {phoneTypes.map((type) => (
        <section key={type.id} id={type.id}>
          <H3 id={`loai-${type.id}`}>
            Máy {type.name}
          </H3>
          <p className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant={badgeVariant[type.badge]}>{type.short}</Badge>
            <span className="text-sm text-muted-foreground">{type.esim}</span>
          </p>
          <Ul>
            {type.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </Ul>
        </section>
      ))}

      <Callout variant="warning" title="Cảnh báo — máy MDM">
        <p>
          Tuyệt đối không reset dòng 2 (Xóa tất cả nội dung và cài đặt) trên
          máy MDM — máy sẽ bị khóa lại và yêu cầu tài khoản MDM để kích hoạt.
        </p>
        <p>
          Từ tháng 4/2026 có dạng <strong>MDM vay</strong> — KHÔNG skip được
          bằng tool. Khi khách hỏi skip MDM, phải hỏi rõ có phải MDM vay không.
        </p>
      </Callout>

      <Callout variant="tip" title="Mẹo tư vấn — EID là gì?">
        <p>
          EID là chế độ sử dụng SIM mới trên iPhone Lock: dùng không cần kèm
          SIM ghép, xài full 100% tính năng như iPhone Quốc tế. Kể cả CNC SIM
          vật lý hay độ eSIM thì cũng là chế độ EID.
        </p>
      </Callout>
    </DocPage>
  );
}
