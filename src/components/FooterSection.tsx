'use client';
import Image from 'next/image';

export default function FooterSection() {
    return (
        <footer className="w-full relative bg-[#6E0D31] text-[#9FCC45] mt-4 rounded-t-[32px] overflow-hidden border-t-2 border-[#6E0D31]">
            {/* Slimmer Wavy Divider */}
            <div className="w-full leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px] md:h-[60px] text-[#FDFDFD]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,107.56,192.17,86.67Z" className="fill-current"></path>
                </svg>
            </div>

            <div className="max-w-[1500px] mx-auto px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-4">
                
                {/* Left Column: Street Club + Signup + Links */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-2 lg:order-1">
                    <div className="space-y-2">
                        <h2 className="font-okia text-4xl md:text-5xl !text-white uppercase tracking-widest leading-none">
                            The Street Club
                        </h2>
                        <p className="font-host text-xs md:text-sm text-[#FDFDFD] uppercase font-bold tracking-widest opacity-80">
                            Sign up for 15% off your first order
                        </p>
                    </div>

                    <div className="flex w-full max-w-sm gap-2">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="flex-1 rounded-full border-[2px] border-[#9FCC45] bg-[#FDFDFD] px-6 py-3 font-host font-bold text-[#6E0D31] outline-none text-sm" 
                        />
                        <button className="bg-[#E84596] text-[#6E0D31] font-inter font-black text-sm uppercase px-8 py-3 rounded-full border-[2px] border-[#6E0D31] hover:translate-y-[-2px] transition-transform shadow-[0_4px_0_#9FCC45] active:translate-y-0 active:shadow-none whitespace-nowrap">
                            Join
                        </button>
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
