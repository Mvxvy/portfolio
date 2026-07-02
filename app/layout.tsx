import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Maksim Karkach — Product Designer",
  description:
    "Product designer with 7 years of experience in FinTech, specializing in trading platforms and affiliate ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white text-[#0f0f0f] font-sans">{children}</body>
    </html>
  );
}
