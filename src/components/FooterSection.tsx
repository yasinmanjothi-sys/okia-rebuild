'use client';
import Image from 'next/image';

export default function FooterSection() {
    return (
        <footer data-nav-theme="dark" className="w-full relative bg-[#6E0D31] text-[#9FCC45] border-t border-[#9FCC45]/20">
            <div className="max-w-[1500px] mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-4">

                {/* Left Column: Street Club + Links */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-2 lg:order-1">
                    <div className="space-y-2">
                        <h2 className="font-okia text-4xl md:text-5xl !text-white uppercase tracking-widest leading-none">
                            The Street Club
                        </h2>
                        <p className="font-host text-xs md:text-sm text-[#FDFDFD] uppercase font-bold tracking-widest opacity-80">
                            Saigon street culture, brewed in Nairobi
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-16 gap-y-3 font-host font-bold text-xs md:text-sm uppercase text-[#9FCC45] tracking-[0.2em]">
                        <div className="flex flex-col gap-3">
                            <a href="/menu" className="hover:text-[#FDFDFD] transition-colors">Menu</a>
                            <a href="/contact" className="hover:text-[#FDFDFD] transition-colors">Find Us</a>
                            <a href="/story" className="hover:text-[#FDFDFD] transition-colors">Story</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="/contact" className="hover:text-[#FDFDFD] transition-colors">Contact</a>
                            <a href="#" className="hover:text-[#FDFDFD] transition-colors">Instagram</a>
                            <a href="#" className="hover:text-[#FDFDFD] transition-colors">TikTok</a>
                        </div>
                    </div>
                </div>

                {/* Center Column: Massive Logo */}
                <div className="flex flex-col items-center justify-center gap-6 order-1 lg:order-2">
                    <div className="relative w-64 md:w-80 lg:w-[500px] h-16 md:h-24 lg:h-36 opacity-95 hover:scale-105 transition-transform duration-500">
                        <Image src="/LOGO_OKIA.svg" alt="O KIA Footer Logo" fill className="object-contain" />
                    </div>
                    <p className="font-inter text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#9FCC45]/40 text-center">
                        © 2026 O KIA COFFEE. ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* Right Column: Massive Sticker Artwork */}
                <div className="flex justify-center lg:justify-end order-3">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] opacity-95 group">
                        <Image 
                            src="/half tone street culture/footer.svg" 
                            alt="Footer Sticker Artwork" 
                            fill 
                            className="object-contain object-center lg:object-right transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110" 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
