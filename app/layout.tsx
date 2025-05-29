import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import MobileTabNav from "@/components/ui/mobileTabNav";

const satoshi = localFont({
  src: '/fonts/Satoshi-Variable.ttf',
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Learning platform",
  description: "Design, build and market your own board game",
  keywords: ['Board game'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased bg-bg-sand font-satoshi`}
      >
         <MobileTabNav />
        {children}
      </body>
    </html>
  );
}
