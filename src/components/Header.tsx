"use client";

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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-[#141414] px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.24)] sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#fefce1]/78 transition-colors duration-200 hover:bg-[#1f1f1f] hover:text-[#fefce1] sm:px-4 sm:text-xs"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
