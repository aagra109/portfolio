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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black px-4 py-4 shadow-2xl shadow-black/20 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors duration-200 hover:bg-neutral-950 hover:text-white sm:px-4"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
