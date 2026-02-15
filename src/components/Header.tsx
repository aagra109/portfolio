"use client";
import ModeToggle from "./ModeToggle";

const navigation = [
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Experience", sectionId: "experience" },
];

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-end px-6 sm:px-10">
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="rounded-full border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-accent-foreground sm:text-sm"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
