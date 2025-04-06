import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Fortune lines - AI-Powered Palm Reading",
  description: "Discover your destiny with advanced AI palm analysis. Upload a photo of your palm and receive personalized insights about your future, personality, and life path in minutes.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.jpg" sizes="64x64" />
        <link rel="alternate icon" type="image/png" href="/logo.jpg" sizes="32x32" />
      </head>
      <body className={`${figtree.variable} font-figtree_regular`}>
        {children}
      </body>
    </html>
  );
}
