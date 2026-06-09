import Link from "next/link";
import { store } from "@/data/store";
import { iphones } from "@/data/iphone";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { questions } from "@/data/questions";
import { navLinks } from "@/components/nav";
import { StatCard, Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { Badge } from "@/components/Badge";

export default function HomePage() {
  const cards = navLinks.filter((l) => l.href !== "/");

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border surface p-7 shadow-card sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="relative">
          <Badge variant="brand">Tài liệu nội bộ · Đào tạo nhân viên</Badge>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Cẩm nang <span className="text-brand-600 dark:text-brand-400">{store.name}</span>
          </h1>
          <p className="muted mt-3 max-w-xl text-base sm:text-lg">{store.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {store.focus.map((f) => (
              <span
                key={f}
                className="surface-2 rounded-lg px-3 py-1.5 text-xs font-medium"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/iphone"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:focus-ring"
            >
              <Icon name="phone" size={16} /> Bắt đầu học sản phẩm
            </Link>
            <Link
              href="/test"
              className="surface inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)] focus-visible:focus-ring"
            >
              <Icon name="clipboard" size={16} /> Làm bài kiểm tra
            </Link>
          </div>
          <p className="muted mt-5 text-xs">
            Mẹo: nhấn <kbd className="surface-2 rounded px-1.5 py-0.5 font-mono">⌘K</kbd> để
            tìm kiếm nhanh bất cứ đâu.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard value={`${iphones.length}`} label="Dòng máy iPhone" icon="phone" />
        <StatCard value={`${services.length}`} label="Dịch vụ" icon="wrench" />
        <StatCard value={`${faqs.length}`} label="Câu hỏi FAQ" icon="help" />
        <StatCard value={`${questions.length}`} label="Câu hỏi kiểm tra" icon="clipboard" />
      </section>

      {/* Categories */}
      <section>
        <h2 className="mb-5 font-display text-xl font-extrabold tracking-tight">
          Danh mục
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.href} href={c.href}>
              <Card className="group h-full p-5 transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/12 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:text-brand-400">
                    <Icon name={c.icon} />
                  </span>
                  <span className="font-display font-bold">{c.label}</span>
                  <Icon
                    name="arrow"
                    size={16}
                    className="muted ml-auto transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="muted mt-3 text-sm">{c.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick reminders */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <Icon name="warn" size={18} className="text-gold-500" />
            <h3 className="font-display font-bold">Ghi nhớ nhanh</h3>
          </div>
          <ul className="muted mt-3 space-y-2 text-sm">
            <li>• Sản phẩm chủ yếu là máy <b className="text-[var(--text)]">Lock Mỹ</b>, body không kèm hộp.</li>
            <li>• Máy CNC/độ EID <b className="text-[var(--text)]">mất áp zin</b> nhưng vẫn đi mưa bình thường.</li>
            <li>• Máy MDM <b className="text-[var(--text)]">không được reset dòng 2</b>.</li>
            <li>• Giá web đã gồm <b className="text-[var(--text)]">Full phụ kiện</b> (sạc, ốp, cường lực).</li>
          </ul>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <Icon name="search" size={18} className="text-brand-500" />
            <h3 className="font-display font-bold">Tra cứu nhanh</h3>
          </div>
          <p className="muted mt-3 text-sm">Thử tìm các từ khóa phổ biến:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["iPhone 17 Pro", "độ EID", "SIM ghép", "Lock", "bảo hành", "trả góp", "MDM"].map(
              (t) => (
                <span
                  key={t}
                  className="surface-2 rounded-full px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
