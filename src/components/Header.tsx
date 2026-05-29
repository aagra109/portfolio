const navigation = [
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Experience", sectionId: "experience" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background px-4 py-4 shadow-2xl shadow-black/10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={`#${item.sectionId}`}
              className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-200 hover:bg-foreground/5 sm:px-4"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
