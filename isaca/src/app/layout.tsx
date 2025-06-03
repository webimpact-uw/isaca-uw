import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISACA UW",
  description: "Website for the UW Chapter of ISACA",
  icons: {
    icon: 'logos/favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
