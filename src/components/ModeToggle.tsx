"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  useEffect(() => {
    if (isMounted && !theme) {
      setTheme("light");
    }
  }, [isMounted, setTheme, theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="ml-2 border-border/90 bg-card text-primary hover:bg-accent hover:text-accent-foreground"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun key="light" className="h-[1.2rem] w-[1.2rem] " />
      ) : (
        <Moon key="dark" className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ModeToggle;
