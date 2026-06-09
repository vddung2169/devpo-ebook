import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cẩm nang nội bộ DEV PỒ",
  description:
    "Cẩm nang sản phẩm & quy trình kinh doanh DEV PỒ — học sản phẩm, tra cứu nhanh, kiểm tra kiến thức.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <aside className="surface sticky top-0 hidden h-screen w-64 shrink-0 border-r lg:block">
              <Sidebar />
            </aside>
            <div className="flex min-w-0 flex-1 flex-col">
              <Navbar />
              <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-10">
                {children}
              </main>
              <footer className="hairline border-t px-6 py-5 text-center text-xs muted">
                DEV PỒ · Cẩm nang điện tử nội bộ · Tài liệu dùng cho đào tạo nhân viên
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
