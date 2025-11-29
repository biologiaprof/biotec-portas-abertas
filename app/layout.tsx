import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "5º Biotec de Portas Abertas - UFES",
  description:
    "Biotecnologia e Sustentabilidade - Evento acadêmico do PPG Biotecnologia da Universidade Federal do Espírito Santo",
  icons: {
    icon: [
      {
        url: "/biotec-portas-abertas/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/biotec-portas-abertas/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/biotec-portas-abertas/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/biotec-portas-abertas/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}