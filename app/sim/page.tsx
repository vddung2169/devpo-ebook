import type { Metadata } from "next";

import { simPolicy, waterproof } from "@/data/simPolicy";
import { DocPage } from "@/components/docs/doc-page";
import { H2, H3, P } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = { title: "Chống nước & SIM/Sóng" };

export default function SimPage() {
  return (
    <DocPage
      title="Chống nước & SIM/Sóng"
      description="Tình trạng áp suất (chống nước) theo loại máy và toàn bộ chính sách, chi phí độ EID / CNC / SIM ghép."
    >
      <H2 id="chong-nuoc">1.3. Tình trạng chống nước (Áp suất)</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Loại máy</TableHead>
            <TableHead>Tình trạng áp suất</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {waterproof.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="font-medium">{row.label}</TableCell>
              <TableCell>
                {row.value}
                {row.hint && (
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {row.hint}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Callout variant="note">
        <p>
          Máy mất áp zin vẫn đi mưa, sử dụng bình thường — chỉ không còn khả
          năng kháng nước tiêu chuẩn. Tư vấn rõ cho khách trước khi độ SIM/CNC.
        </p>
      </Callout>

      <H2 id="sim-song">1.4. Chính sách về SIM &amp; Sóng</H2>
      {simPolicy.map((group) => (
        <section key={group.id}>
          <H3 id={group.id}>{group.group}</H3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hạng mục</TableHead>
                <TableHead className="min-w-28">Giá / Mức</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-medium">{row.label}</TableCell>
                  <TableCell>
                    {row.value}
                    {row.hint && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {row.hint}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {group.notes && group.notes.length > 0 && (
            <Callout variant="warning" title="Lưu ý">
              <ul>
                {group.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Callout>
          )}
        </section>
      ))}

      <H2 id="eid-la-gi">EID là gì?</H2>
      <P>
        EID là chế độ sử dụng SIM mới trên iPhone Lock: dùng{" "}
        <strong>không cần kèm SIM ghép</strong>, xài full 100% tất cả tính năng
        như iPhone Quốc tế. Kể cả CNC SIM vật lý hay độ eSIM thì cũng là chế độ
        EID.
      </P>
      <Callout variant="tip" title="Phân biệt EID và TMSI">
        <p>
          16E / 17E dùng 2 SIM vật lý không cần kèm SIM ghép nhưng vẫn là{" "}
          <strong>chế độ ghép TMSI, không phải EID</strong>. 17 Air chưa độ
          được EID — độ được 1 SIM vật lý ghép chế độ TMSI.
        </p>
      </Callout>
    </DocPage>
  );
}
