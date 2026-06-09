import {
  accessoryPolicy,
  paymentMethods,
  cardFees,
  installments,
} from "@/data/pricing";
import { Card, SectionHeading, DataRow } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";

export default function PaymentPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Phần 2 · Chính sách giá & thanh toán"
        title="Giá & Thanh toán"
        desc="Chính sách phụ kiện, các phương thức thanh toán, phí quẹt thẻ và các hình thức trả góp."
      />

      {/* 2.1 Phụ kiện */}
      <section id="phu-kien">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">2.1</span> Chính sách giá & phụ kiện
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Icon name="wallet" size={18} className="text-brand-500" />
              <h3 className="font-semibold">Gói &quot;Full phụ kiện&quot;</h3>
            </div>
            <p className="muted mt-2 text-sm">{accessoryPolicy.note}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {accessoryPolicy.fullKit.map((k) => (
                <span key={k} className="surface-2 rounded-lg px-3 py-1 text-xs font-medium">
                  {k}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h3 className="mb-2 font-semibold">Trừ lùi phụ kiện</h3>
            {accessoryPolicy.deductions.map((d) => (
              <DataRow key={d.label} label={d.label} value={d.value} />
            ))}
          </Card>
        </div>
      </section>

      {/* 2.2 Phương thức thanh toán */}
      <section id="thanh-toan">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">2.2</span> Phương thức thanh toán
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {paymentMethods.map((p) => (
            <Card key={p.id} id={p.id} className="p-5">
              <h3 className="font-display font-bold">{p.name}</h3>
              <p className="muted mt-1 text-sm">{p.summary}</p>
              <ol className="mt-3 space-y-2">
                {p.steps.map((s, i) => (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4">
                {p.fees.map((f) => (
                  <DataRow key={f.label} label={f.label} value={f.value} hint={f.hint} />
                ))}
              </div>
              {p.notes.map((n, i) => (
                <p
                  key={i}
                  className="mt-3 rounded-lg bg-brand-500/8 px-3 py-2 font-mono text-xs text-brand-700 dark:text-brand-300"
                >
                  {n}
                </p>
              ))}
            </Card>
          ))}
        </div>
      </section>

      {/* 2.3 Phí quẹt thẻ */}
      <section id="quet-the">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">2.3</span> Phí quẹt thẻ (Visa / Mastercard)
        </h2>
        <Card className="p-5">
          {cardFees.map((f) => (
            <DataRow key={f.label} label={f.label} value={f.value} />
          ))}
        </Card>
      </section>

      {/* 2.4 Trả góp */}
      <section id="tra-gop">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">2.4</span> Chính sách trả góp
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {installments.map((p) => (
            <Card key={p.id} id={p.id} className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-bold leading-tight">{p.name}</h3>
                <Badge variant="blue">{p.channel}</Badge>
              </div>
              <div className="mt-3">
                {p.rows.map((r) => (
                  <DataRow key={r.label} label={r.label} value={r.value} />
                ))}
              </div>
              {p.notes.length > 0 && (
                <ul className="muted mt-3 space-y-1 text-xs">
                  {p.notes.map((n, i) => (
                    <li key={i} className="flex gap-1.5">
                      <Icon name="warn" size={12} className="mt-0.5 shrink-0 text-gold-500" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
