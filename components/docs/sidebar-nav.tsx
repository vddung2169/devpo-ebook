"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { docsNav } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function SidebarNav({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Điều hướng tài liệu" className="flex flex-col gap-1">
      {docsNav.map((group) => {
        const isActiveGroup = group.items.some((i) => i.href === pathname);
        return (
          <Collapsible key={group.title} defaultOpen>
            <CollapsibleTrigger
              className={cn(
                "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold text-foreground hover:bg-accent [&[data-state=open]>svg]:rotate-90",
                isActiveGroup && "text-foreground"
              )}
            >
              {group.title}
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <ul className="mb-2 ml-2 space-y-0.5 border-l pl-3 pt-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors",
                          active
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </nav>
  );
}
