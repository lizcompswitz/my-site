import type { Metadata } from "next";
import { Fugaz_One, Lora, Work_Sans, Nanum_Brush_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fugazOne = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-ui',
  display: 'swap',
});

const nanumBrush = Nanum_Brush_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brush',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "one twelve | 112.",
  description: "one twelve — a brand built at the intersection of design, coaching, and creation. Home of Coaches Box and the PV Logbook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fugazOne.variable} ${lora.variable} ${workSans.variable} ${nanumBrush.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
