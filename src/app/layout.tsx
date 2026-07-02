import type { Metadata } from "next";
import { Inter, Host_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import FooterSection from "@/components/FooterSection";
import { HeroLogoProvider } from "@/components/HeroLogoContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const okiaType = localFont({
  src: "../../public/fonts/OKIA_Basic_Regular/Okiatype-Regular-Basic.otf",
  variable: "--font-okia",
});

export const metadata: Metadata = {
  title: "O KIA COFFEE | Rebuild",
  description: "Total rebuild of O KIA Coffee interface inspired by Poppi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${okiaType.variable} ${hostGrotesk.variable} antialiased font-inter font-light tracking-wide bg-[#1a1a1a] text-maroon selection:bg-pink selection:text-maroon overflow-hidden h-[100dvh]`}
      >
        <HeroLogoProvider>
          <div
            id="scroll-root"
            className="fixed inset-2 md:inset-3 rounded-[24px] md:rounded-[32px] overflow-y-auto overflow-x-hidden bg-neutral"
          >
            {children}
            <Newsletter />
            <FooterSection />
          </div>

          {/* Nav floats over whatever section is currently at the top, rather than pushing content down */}
          <div className="fixed top-2 md:top-3 left-2 md:left-3 right-2 md:right-3 z-[90]">
            <Navbar />
          </div>
        </HeroLogoProvider>
      </body>
    </html>
  );
}
