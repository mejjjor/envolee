import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
// import acceuil from "@/public/acceuil.jpg"
// import miels from "@/public/miels.jpg"
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { headers } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const referer = headersList.get("referer");

  let currentPathname = "/";
  if (referer) {
    const url = new URL(referer);
    currentPathname = url.pathname;
  }

  return (
    <html lang="fr">
      <body
        className={`${poppins.className} antialiased grid grid-rows-[1fr_auto] min-h-screen overflow-x-hidden`}
      >
        <div className="p-12 pb-48 mx-auto w-screen">
          <div className="max-w-[1350px] mx-auto">
            <Header pathname={currentPathname} />
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
