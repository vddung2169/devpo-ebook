import { services } from "@/data/services";
import { Card, SectionHeading } from "@/components/Card";
import { Icon, type IconName } from "@/components/Icon";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Dịch vụ cửa hàng"
        title="Dịch vụ"
        desc="Các dịch vụ kỹ thuật và hỗ trợ bán hàng được tổng hợp từ cẩm nang: độ SIM, skip MDM, trả góp, bảo hành, giao hàng."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((s) => (
          <Card key={s.id} id={s.id} className="p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/12 text-brand-600 dark:text-brand-400">
                <Icon name={s.icon as IconName} />
              </span>
              <h3 className="font-display text-lg font-bold">{s.name}</h3>
            </div>
            <p className="muted mt-3 text-sm">{s.description}</p>

            <div className="mt-4">
              <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
                <Icon name="clipboard" size={14} className="text-brand-500" /> Quy trình
              </h4>
              <ul className="muted space-y-1.5 text-sm">
                {s.process.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-500">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {s.notes.length > 0 && (
              <div className="mt-4 rounded-xl border border-gold-500/30 bg-gold-500/8 p-3">
                <h4 className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-400">
                  <Icon name="warn" size={14} /> Lưu ý
                </h4>
                <ul className="muted space-y-1 text-sm">
                  {s.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
