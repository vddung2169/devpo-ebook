import type { Metadata } from "next";

import {
  accessoryPolicy,
  paymentMethods,
  cardFees,
  installments,
} from "@/data/pricing";
import { DocPage } from "@/components/docs/doc-page";
import { H2, H3, P } from "@/components/docs/typography";
import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = { title: "Giá & Thanh toán" };

export default function PaymentPage() {
  return (
    <DocPage
      title="Giá & Thanh toán"
      description="Cách xác định giá bán, chính sách phụ kiện đi kèm và các phương thức thanh toán được chấp nhận tại cửa hàng."
    >
      <H2 id="gia-phu-kien">2.1. Chính sách giá và phụ kiện</H2>
      <P>{accessoryPolicy.note}</P>
      <P>
        Gói &quot;Full phụ kiện&quot; gồm:{" "}
        {accessoryPolicy.fullKit.map((item) => (
          <Badge key={item} variant="secondary" className="mr-1">
            {item}
          </Badge>
        ))}
      </P>
      <H3 id="tru-lui-phu-kien">Chính sách trừ lùi phụ kiện</H3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tùy chọn</TableHead>
            <TableHead>Giảm giá</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessoryPolicy.deductions.map((d) => (
            <TableRow key={d.label}>
              <TableCell className="font-medium">{d.label}</TableCell>
              <TableCell>{d.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <H2 id="phuong-thuc-thanh-toan">2.2. Phương thức thanh toán</H2>
      {paymentMethods.map((method, mi) => (
        <section key={method.id} id={method.id}>
          <H3 id={`ptt-${method.id}`}>
            2.2.{mi + 1}. {method.name}
          </H3>
          <P>{method.summary}</P>
          <Steps>
            {method.steps.map((s, i) => (
              <Step key={s} label={`${i + 1}`} title={s} />
            ))}
          </Steps>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loại phí</TableHead>
                <TableHead>Mức</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {method.fees.map((f) => (
                <TableRow key={f.label}>
                  <TableCell className="font-medium">{f.label}</TableCell>
                  <TableCell>
                    {f.value}
                    {f.hint && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {f.hint}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {method.notes.map((n) => (
            <Callout key={n} variant="note">
              <p>{n}</p>
            </Callout>
          ))}
        </section>
      ))}

      <H2 id="phi-quet-the">2.3. Phí quẹt thẻ (Visa/Mastercard)</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hình thức</TableHead>
            <TableHead>Phí</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cardFees.map((f) => (
            <TableRow key={f.label}>
              <TableCell className="font-medium">{f.label}</TableCell>
              <TableCell>{f.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <H2 id="tra-gop">2.4. Chính sách trả góp</H2>
      {installments.map((plan, pi) => (
        <section key={plan.id} id={plan.id}>
          <H3 id={`gop-${plan.id}`}>
            2.4.{pi + 1}. {plan.name}
          </H3>
          <p className="mt-2">
            <Badge variant="outline">{plan.channel}</Badge>
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Điều khoản</TableHead>
                <TableHead>Nội dung</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plan.rows.map((row) => (
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
          {plan.notes.map((n) => (
            <Callout key={n} variant="note">
              <p>{n}</p>
            </Callout>
          ))}
        </section>
      ))}
    </DocPage>
  );
}
