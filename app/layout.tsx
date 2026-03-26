import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
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
      className={`${geistSans.variable} ${cormorant.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-charcoal">
        <header className="border-b border-linen bg-background py-4 px-6 text-center">
          <Link href="/" className="inline-block group">
            <p className="font-heading text-xl tracking-widest uppercase text-charcoal group-hover:text-[#6b6460] transition-colors">
              Angie &amp; Alex
            </p>
            <p className="text-xs tracking-widest text-terracotta mt-0.5 uppercase">
              [Month DD, YYYY] &nbsp;·&nbsp; [City], Peru
            </p>
          </Link>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-linen py-6 text-center text-xs tracking-widest text-stone-light uppercase">
          With love, from Peru
        </footer>
      </body>
    </html>
  );
}
