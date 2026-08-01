"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Smartphone } from "lucide-react";

import { CommandMenu } from "@/components/docs/command-menu";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Hamburger mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Mở menu điều hướng"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto p-4">
            <SheetTitle className="sr-only">Điều hướng</SheetTitle>
            <SheetDescription className="sr-only">
              Danh mục tài liệu cẩm nang
            </SheetDescription>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mb-4 flex items-center gap-2 px-2 font-semibold"
            >
              <Smartphone className="h-5 w-5" />
              DEV PỒ
            </Link>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Smartphone className="h-5 w-5" />
          <span className="hidden sm:inline">DEV PỒ</span>
          <span className="hidden text-sm font-normal text-muted-foreground md:inline">
            · Cẩm nang nội bộ
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
