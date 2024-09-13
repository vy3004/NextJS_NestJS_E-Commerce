import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taka E-Commerce",
  description: "Taka E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
