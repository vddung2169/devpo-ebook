"use client";

import { useTheme } from "@/hooks/useTheme";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Chuyển sang nền sáng" : "Chuyển sang nền tối"}
      className="surface grid h-9 w-9 place-items-center rounded-lg border transition-colors hover:bg-[var(--surface-2)] focus-visible:focus-ring"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}
