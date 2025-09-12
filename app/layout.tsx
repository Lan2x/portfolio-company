import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { siteConfig } from "@/lib/site";
import { Toaster } from "@/components/ui/sonner";

const pretendard = localFont({
  variable: "--font-geist-sans",
  display: "swap",
  src: [
    {
      path: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: "image/png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${geistMono.variable} font-sans antialiased bg-[radial-gradient(ellipse_at_top,theme(colors.secondary)/30_0%,transparent_60%)]`}
      >
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
