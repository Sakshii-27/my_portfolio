import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakshi Aggarwal | Full-Stack Developer",
  description: "Portfolio of Sakshi Aggarwal, a Full-Stack Developer specializing in Next.js, AI, and Modern Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(outfit.className, "bg-background text-foreground antialiased selection:bg-purple-500/30")}>
        <div className="fixed inset-0 -z-10 bg-aurora" />
        {children}
      </body>
    </html>
  );
}
