import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angie & Alex — Getting Married!",
  description: "Join us to celebrate the wedding of Angie and Alex in Peru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-warm-brown">
        <header className="border-b border-tan py-4 px-6 text-center">
          <Link href="/" className="inline-block group">
            <p className="font-heading text-xl tracking-widest uppercase text-muted-brown group-hover:text-warm-brown transition-colors">
              Angie &amp; Alex
            </p>
            <p className="text-xs tracking-widest text-terracotta mt-0.5 uppercase">
              [Month DD, YYYY] &nbsp;·&nbsp; [City], Peru
            </p>
          </Link>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-tan py-6 text-center text-xs tracking-widest text-muted-brown uppercase">
          With love, from Peru
        </footer>
      </body>
    </html>
  );
}
