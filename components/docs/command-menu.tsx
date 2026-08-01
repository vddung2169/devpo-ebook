"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { FileText, CornerDownLeft } from "lucide-react";

import { docsNav } from "@/lib/docs-nav";
import { searchIndex } from "@/data/searchIndex";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu({ className }: { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = React.useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-muted/50 px-3 text-sm text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground sm:w-64 md:w-72",
          className
        )}
      >
        <span className="inline-flex-1 truncate text-left flex-1">
          Tìm kiếm tài liệu…
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Tìm trang, thuật ngữ, chính sách…" />
        <CommandList>
          <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
          {docsNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.desc ?? ""}`}
                  onSelect={() => go(item.href)}
                >
                  <FileText className="text-muted-foreground" />
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    {item.desc && (
                      <span className="text-xs text-muted-foreground">
                        {item.desc}
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Nội dung">
            {searchIndex.map((entry, i) => (
              <CommandItem
                key={`${entry.href}-${i}`}
                value={`${entry.title} ${entry.keywords}`}
                onSelect={() => go(entry.href)}
              >
                <CornerDownLeft className="text-muted-foreground" />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate">{entry.title}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {entry.section} · {entry.subtitle}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
