import type { Metadata } from "next";

import {
  warrantyPackages,
  warrantyConditions,
  warrantyIntake,
  warrantyCenters,
} from "@/data/warranty";
import { DocPage } from "@/components/docs/doc-page";
import { H2, H3, P, Ul } from "@/components/docs/typography";
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

export const metadata: Metadata = { title: "Bảo hành & Đổi trả" };

export default function WarrantyPage() {
  return (
    <DocPage
      title="Bảo hành & Đổi trả"
      description="Ba gói bảo hành, điều kiện áp dụng và các địa chỉ bảo hành / CNC."
    >
      <H2 id="cac-goi-bao-hanh">3.1. Các gói bảo hành</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gói</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>1 đổi 1 (lỗi NSX)</TableHead>
            <TableHead>BH phần cứng</TableHead>
            <TableHead>BH độ SIM/CNC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {warrantyPackages.map((pkg) => (
            <TableRow key={pkg.id} id={pkg.id}>
              <TableCell className="font-medium">
                {pkg.name}
                {pkg.highlight && (
                  <Badge className="ml-2" variant="secondary">
                    Phổ biến
                  </Badge>
                )}
              </TableCell>
              <TableCell>{pkg.price}</TableCell>
              <TableCell>{pkg.oneToOne}</TableCell>
              <TableCell>{pkg.hardware}</TableCell>
              <TableCell>{pkg.simCnc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <H2 id="dieu-kien">3.2. Điều kiện bảo hành &amp; Từ chối bảo hành</H2>
      <H3 id="dieu-kien-bat-buoc">Điều kiện bắt buộc</H3>
      <Ul>
        {warrantyConditions.required.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </Ul>
      <Callout variant="warning" title="Các trường hợp TỪ CHỐI bảo hành">
        <ul>
          {warrantyConditions.rejected.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Callout>

      <H2 id="dia-chi">3.3. Các địa chỉ bảo hành / CNC</H2>
      <H3 id="khach-cua-hang">Đối với khách cửa hàng</H3>
      <P>Khách đưa máy đến bảo hành độ SIM / phần cứng:</P>
      <Ul>
        {warrantyIntake.storeCustomer.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </Ul>
      <H3 id="khach-ngoai">Đối với khách ngoài</H3>
      <P>{warrantyIntake.outsideCustomer}</P>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cửa hàng</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Họ tên</TableHead>
            <TableHead>SĐT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {warrantyCenters.map((c) => (
            <TableRow key={c.shop}>
              <TableCell className="font-medium">{c.shop}</TableCell>
              <TableCell>{c.address}</TableCell>
              <TableCell>{c.contact}</TableCell>
              <TableCell className="whitespace-nowrap font-mono text-xs">
                {c.phone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DocPage>
  );
}
