import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { spaceGrotesk } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ansh Agrawal Portfolio",
  description:
    "Full-stack software engineer building scalable web applications with product thinking, strong execution, and a growing focus on AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
