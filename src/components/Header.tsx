"use client";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import ModeToggle from "./ModeToggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
];

export default function Header() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 24;

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-end px-6 sm:px-10">
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
