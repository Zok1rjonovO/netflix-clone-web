import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/provider";
import GlobalContext from "@/context";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix clone",
  description: "Netlfix clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GlobalContext>
          {children}
          </GlobalContext>
        </Provider>
      </body>
    </html>
  );
}
