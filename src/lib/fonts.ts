import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/space-grotesk-latin-wght-normal.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["Avenir Next", "Segoe UI", "sans-serif"],
});
