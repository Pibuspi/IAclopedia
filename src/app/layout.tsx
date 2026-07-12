import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IAclopédia | Toda Inteligência Artificial em um só lugar",
    template: "%s | IAclopédia",
  },
  description:
    "A maior plataforma brasileira de referência sobre Inteligência Artificial, com comparativos, avaliações, vídeos, prompts e notícias.",
  keywords: [
    "IA",
    "inteligência artificial",
    "ferramentas de IA",
    "comparativos de IA",
    "prompts",
    "notícias IA",
  ],
  openGraph: {
    title: "IAclopédia",
    description: "Descubra, compare e escolha as melhores ferramentas de IA com avaliações e guias prontos.",
    type: "website",
    locale: "pt_BR",
    url: "https://iaclopedia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAclopédia",
    description: "Toda Inteligência Artificial em um só lugar.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
