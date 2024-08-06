"use client";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import ModeToggle from "./ModeToggle";

const navigation = [
  { name: "About Me", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Experience", href: "#" },
];

export default function Header() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        "flex justify-end mr-10 top-0 w-full h-full",
        scrollPosition > 50 ? "sticky z-50 bg-primary-foreground" : ""
      )}
    >
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative rounded-md px-3 py-2 text-sm  text-primary font-semibold hover:underline hover:underline-offset-4 hover:text-secondary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
