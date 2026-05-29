import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank" as const, rel: "noreferrer noopener" }
    : {};
}
