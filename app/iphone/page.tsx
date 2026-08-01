import type { Metadata } from "next";

import { iphones, seriesList } from "@/data/iphone";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = { title: "Các dòng iPhone Lock" };

export default function IphonePage() {
  return (
    <DocPage
      title="Các dòng iPhone Lock"
      description="Khả năng SIM / độ EID, tình trạng chống nước và chi phí độ SIM của từng dòng máy Lock — từ 12 đến 17 series."
    >
      <Callout variant="note">
        <p>
          Cẩm nang gốc không liệt kê thông số kỹ thuật (màn hình, chip, pin…).
          Trang này chỉ tổng hợp đúng phần cẩm nang nêu: khả năng SIM/eSIM, độ
          EID, chống nước và điểm cần tư vấn.
        </p>
      </Callout>

      {seriesList.map((series) => {
        const models = iphones.filter((m) => m.series === series);
        return (
          <section key={series}>
            <H2 id={`series-${series}`}>iPhone {series} series</H2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-36">Dòng máy</TableHead>
                  <TableHead>SIM (bản Lock)</TableHead>
                  <TableHead>Độ EID</TableHead>
                  <TableHead>Chống nước</TableHead>
                  <TableHead>Chi phí</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {models.map((m) => (
                  <TableRow key={m.id} id={m.id}>
                    <TableCell className="font-medium">
                      {m.name}
                      <Badge variant="secondary" className="ml-2">
                        {m.tier}
                      </Badge>
                    </TableCell>
                    <TableCell>{m.simSupport}</TableCell>
                    <TableCell>{m.eid}</TableCell>
                    <TableCell>{m.waterproof}</TableCell>
                    <TableCell>{m.simCost || "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {models.some((m) => m.highlights.length > 0) && (
              <div className="space-y-1">
                {models.flatMap((m) =>
                  m.highlights.map((h) => (
                    <P key={`${m.id}-${h}`} className="text-sm text-muted-foreground [&:not(:first-child)]:mt-1">
                      <span className="font-medium text-foreground">
                        {m.name}:
                      </span>{" "}
                      {h}
                    </P>
                  ))
                )}
              </div>
            )}
          </section>
        );
      })}

      <Callout variant="tip" title="Ghi nhớ nhanh">
        <ul>
          <li>iP &lt; 14: 1 SIM vật lý qua SIM ghép / độ EID (13 độ được 2 SIM).</li>
          <li>iP &gt; 14: CNC độ EID để dùng 2 SIM.</li>
          <li>16E / 17E: 2 SIM vật lý chế độ ghép TMSI — không phải EID.</li>
          <li>13 Pro/Max chưa độ được EID; 17 Air chỉ độ được 1 SIM TMSI.</li>
        </ul>
      </Callout>
    </DocPage>
  );
}
