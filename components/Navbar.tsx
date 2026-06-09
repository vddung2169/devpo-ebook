"use client";

import { useState } from "react";
import { GlobalSearch } from "./GlobalSearch";
import { ThemeToggle } from "./ThemeToggle";
import { Sidebar } from "./Sidebar";
import { Icon } from "./Icon";

export function Navbar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className="surface sticky top-0 z-30 flex items-center gap-3 border-b px-4 py-3 backdrop-blur-md lg:px-6">
        <button
          onClick={() => setDrawer(true)}
          aria-label="Mở menu"
          className="surface grid h-9 w-9 place-items-center rounded-lg border lg:hidden"
        >
          <Icon name="menu" size={18} />
        </button>

        <span className="font-display text-sm font-extrabold lg:hidden">DEV PỒ</span>

        <div className="ml-auto flex items-center gap-2 sm:ml-0 sm:flex-1">
          <div className="hidden flex-1 sm:block" />
          <GlobalSearch />
          <ThemeToggle />
        </div>
      </header>

      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDrawer(false)}
          />
          <div className="surface absolute left-0 top-0 h-full w-72 max-w-[80vw] border-r animate-scale-in">
            <button
              onClick={() => setDrawer(false)}
              aria-label="Đóng menu"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg"
            >
              <Icon name="x" size={18} />
            </button>
            <Sidebar onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      )}
    </>
  );
}
