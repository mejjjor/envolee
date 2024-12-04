import type { Metadata } from "next";
import "./globals.css";
import { Questrial } from 'next/font/google'


const questrial = Questrial({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.className} antialiased p-2 sm:p-4 h-screen`}
      >
        {children}
      </body>
    </html>
  );
}