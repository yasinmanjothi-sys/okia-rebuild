import type { Metadata } from "next";
import { Inter, Host_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedRibbon from "@/components/AnimatedRibbon";

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
        className={`${inter.variable} ${okiaType.variable} ${hostGrotesk.variable} antialiased font-inter font-light tracking-wide bg-neutral text-maroon selection:bg-pink selection:text-maroon flex flex-col min-h-screen`}
      >
        <AnimatedRibbon 
            items={["Ca Phe Phin", "Tuong Theater", "Sensory Overload", "Saigon Street Vibe", "Authentic Banh Mi"]} 
            bgColor="bg-[#E84596]" 
            textColor="text-[#FDFDFD]" 
            maskIcon={true}
            speed={40}
        />
        
        {children}
      </body>
    </html>
  );
}
