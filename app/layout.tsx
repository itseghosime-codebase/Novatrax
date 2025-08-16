import type { Metadata } from "next";
import { Geo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

const geo = Geo({
  variable: "--font-geo-mono",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrumental-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Novatrax",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geo.variable} ${instrumentSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
