import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HomeHeader from "@/components/HomeHeader";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kinde Next.js Starter",
  description:
    "A Next.js authentication starter template using Kinde, TypeScript and tailwindcss. Deploy to Vercel now in one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-slate-100 to-white flex flex-col min-h-screen  dark:to-slate-950 dark:from-black`}
      >
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}
