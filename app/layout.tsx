import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/docs/theme-provider";
import { SiteHeader } from "@/components/docs/site-header";
import { SidebarNav } from "@/components/docs/sidebar-nav";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cẩm nang nội bộ DEV PỒ",
    template: "%s · Cẩm nang DEV PỒ",
  },
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
      <body
        className={`${inter.variable} ${mono.variable} min-h-screen font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="mx-auto flex w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r py-8 pr-6 lg:block">
              <SidebarNav />
            </aside>
            <div className="min-w-0 flex-1 lg:pl-10">{children}</div>
          </div>
          <footer className="border-t py-6 text-center text-xs text-muted-foreground">
            DEV PỒ · Cẩm nang điện tử nội bộ · Tài liệu dùng cho đào tạo nhân viên
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
