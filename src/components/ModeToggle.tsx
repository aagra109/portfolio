"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // component is mounted, update state
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
  }, [isMounted, theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun key="light" className="h-[1.2rem] w-[1.2rem] " />
      ) : (
        <Moon key="dark" className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ModeToggle;
