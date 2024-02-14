import type { Metadata } from "next";
import { Source_Code_Pro as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav/NavBar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Snippitopia",
  description: "Share code & scripts snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "dark font-sans antialiased",
          fontSans.variable
        )}>
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </body>
    </html>
  );
}
