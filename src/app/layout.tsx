import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Yiscotech Global Services Limited - Professional Land Surveying Services",
  description:
    "Expert land surveying services including topographical surveys, boundary surveys, and construction layout. Professional, accurate, and reliable surveying solutions.",
  keywords: [
    "land surveying",
    "topographical survey",
    "boundary survey",
    "construction layout",
    "surveying services",
    "professional surveyor",
  ],
  authors: [{ name: "Yiscotech Global Services Limited" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
