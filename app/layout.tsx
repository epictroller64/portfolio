import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin's Portfolio",
  description: "Full Stack Developer Portfolio showcasing web development projects and skills",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Martin's Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Martin's Portfolio",
    description: "Full Stack Developer Portfolio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "no-verification",
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
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </head>
      <body className={`${inter.className} bg-slate-50`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
