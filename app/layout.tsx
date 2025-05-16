import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const satoshi = localFont({
  src: '/fonts/Satoshi-Variable.ttf',
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Learning platform",
  description: "A learning platform for developing board games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased bg-bg-sand`}
      >
        {children}
      </body>
    </html>
  );
}
