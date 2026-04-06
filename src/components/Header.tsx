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
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="site-nav-button"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
