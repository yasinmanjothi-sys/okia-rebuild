'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FDFDFD] px-6 py-4 flex justify-between items-center z-[90] rounded-[32px] mb-2 border-sticker sticky top-0 md:top-10 shadow-lg">
            {/* Left Links */}
            <div className="flex-1 hidden md:flex items-center gap-6 font-inter font-bold text-sm tracking-widest uppercase text-[#6E0D31]">
                <Link href="#menu" className="hover:text-[#E84596] transition-colors hover:scale-105 active:scale-95 inline-block">Menu</Link>
                <Link href="#story" className="hover:text-[#E84596] transition-colors hover:scale-105 active:scale-95 inline-block">The Story</Link>
                <Link href="#contact" className="hover:text-[#E84596] transition-colors hover:scale-105 active:scale-95 inline-block">Contact</Link>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
                <Link href="/">
                    <div className="relative w-32 md:w-40 h-10 hover:scale-105 transition-transform">
                        <Image src="/LOGO_OKIA.svg" alt="O KIA Logo" fill className="object-contain" priority />
                    </div>
                </Link>
            </div>

            {/* Right CTA */}
            <div className="flex-1 flex justify-end">
                <button className="bg-[#6E0D31] text-[#FDFDFD] px-8 py-3 rounded-full font-inter font-bold tracking-widest text-sm md:text-base uppercase hover-pop-invert border-sticker transition-transform shadow-[0_3px_0_#9FCC45]">
                    Book a Table
                </button>
            </div>
        </nav>
    );
}
