import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Auria - AI-Powered Skin Analysis",
  description: "Get personalized skincare recommendations using AI technology. Upload a selfie and receive a customized skincare plan in minutes.",
  icons: {
    icon: [
      {
        url: '/Favicon.svg',
        type: 'image/svg+xml',
        sizes: '64x64'
      },
      {
        url: '/Image/Favicon.png',
        type: 'image/png',
        sizes: '32x32'
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Favicon.svg" sizes="64x64" />
        <link rel="alternate icon" type="image/png" href="/Image/Favicon.png" sizes="32x32" />
      </head>
      <body className={`${figtree.variable} font-figtree_regular`}>
        {children}
      </body>
    </html>
  );
}
