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
