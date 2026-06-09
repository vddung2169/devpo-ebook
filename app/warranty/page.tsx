import {
  warrantyPackages,
  warrantyConditions,
  warrantyIntake,
  warrantyCenters,
} from "@/data/warranty";
import { Card, SectionHeading, DataRow } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";

export default function WarrantyPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Phần 3 · Bảo hành & đổi trả"
        title="Chính sách bảo hành"
        desc="Các gói bảo hành, điều kiện áp dụng, các trường hợp từ chối và địa chỉ tiếp nhận."
      />

      {/* 3.1 Các gói */}
      <section id="goi-bao-hanh">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">3.1</span> Các gói bảo hành
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {warrantyPackages.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              className={`relative p-5 ${
                p.highlight ? "border-brand-500/60 shadow-glow" : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-2.5 left-5">
                  <Badge variant="brand">Phổ biến</Badge>
                </span>
              )}
              <h3 className="font-display text-lg font-extrabold">{p.name}</h3>
              <div className="mt-1 font-mono text-2xl font-bold text-brand-600 dark:text-brand-400">
                {p.price}
              </div>
              <div className="mt-4 space-y-0">
                <DataRow label="1 đổi 1 (lỗi NSX)" value={p.oneToOne} />
                <DataRow label="Bảo hành phần cứng" value={p.hardware} />
                <DataRow label="Bảo hành độ SIM/CNC" value={p.simCnc} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3.2 Điều kiện */}
      <section id="dieu-kien">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">3.2</span> Điều kiện & từ chối bảo hành
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h3 className="mb-3 flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
              <Icon name="check" size={16} /> Điều kiện bắt buộc
            </h3>
            <ul className="space-y-2 text-sm">
              {warrantyConditions.required.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <h3 className="mb-3 flex items-center gap-1.5 font-semibold text-red-600 dark:text-red-400">
              <Icon name="x" size={16} /> Trường hợp từ chối
            </h3>
            <ul className="space-y-2 text-sm">
              {warrantyConditions.rejected.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="x" size={15} className="mt-0.5 shrink-0 text-red-500" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* 3.3 Quy trình & địa chỉ */}
      <section id="dia-chi">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">3.3</span> Quy trình tiếp nhận & địa chỉ
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h3 className="mb-2 font-semibold">Khách cửa hàng</h3>
            <ul className="muted space-y-2 text-sm">
              {warrantyIntake.storeCustomer.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-500">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <h3 className="mb-2 font-semibold">Khách ngoài</h3>
            <p className="muted text-sm">{warrantyIntake.outsideCustomer}</p>
          </Card>
        </div>

        <h3 className="mb-3 mt-6 font-semibold">Địa chỉ bảo hành / CNC</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {warrantyCenters.map((c) => (
            <Card key={c.shop} className="p-5">
              <div className="flex items-center gap-2">
                <Icon name="wrench" size={16} className="text-brand-500" />
                <h4 className="font-display font-bold">{c.shop}</h4>
              </div>
              <p className="muted mt-2 text-sm">{c.address}</p>
              <div className="hairline mt-3 border-t pt-3 text-sm">
                <div>{c.contact}</div>
                <a
                  href={`tel:${c.phone}`}
                  className="font-mono font-semibold text-brand-600 dark:text-brand-400"
                >
                  {c.phone}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
