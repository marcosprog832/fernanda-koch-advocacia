import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

// CORREÇÃO: Como o globals.css está na mesma pasta (app), o "./" aponta direto para ele
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fernanda Koch | Advocacia & Consultoria",
  description:
    "Escritório de advocacia especializado em direito empresarial, contencioso estratégico e consultoria patrimonial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} font-body bg-ink text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}