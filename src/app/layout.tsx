import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUTARMI - Jasa Penunjang Pertanian Terpercaya",
  description: "SUTARMI menyediakan berbagai layanan jasa penunjang pertanian profesional di Sragen, Jawa Tengah. Mitra terpercaya untuk meningkatkan produktivitas pertanian Anda.",
  keywords: ["SUTARMI", "jasa pertanian", "penunjang pertanian", "pengolahan lahan", "irigasi", "panen", "Sragen", "Jawa Tengah", "pertanian Indonesia"],
  authors: [{ name: "SUTARMI Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "SUTARMI - Jasa Penunjang Pertanian Terpercaya",
    description: "Mitra profesional untuk semua kebutuhan pertanian Anda. Layanan pengolahan lahan, penanaman, irigasi, panen, dan konsultasi pertanian.",
    url: "https://sutarmi.com",
    siteName: "SUTARMI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUTARMI - Jasa Penunjang Pertanian",
    description: "Layanan pertanian profesional untuk meningkatkan produktivitas hasil panen Anda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="1vtf84pamfkvbew8ufsoeufsa6zsux" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
