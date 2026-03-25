'use client';
import Image from 'next/image';

export default function FooterSection() {
    return (
        <footer className="w-full relative bg-[#6E0D31] text-[#9FCC45] mt-4 rounded-t-[32px] overflow-hidden border-t-2 border-[#6E0D31]">
            {/* Wavy Divider transitioning from the neutral background identically mapping to the Poppi aesthetic */}
            <div className="w-full leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] text-[#FDFDFD]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,107.56,192.17,86.67Z" className="fill-current"></path>
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center">
                <h2 className="font-okia text-7xl md:text-[10rem] leading-[0.8] mb-8 !text-white drop-shadow-sm tracking-widest z-10 relative">
                    <span className="absolute -left-[5%] -top-[10%] opacity-20 rotate-[-15deg] mix-blend-multiply w-[300px] h-[300px] bg-[radial-gradient(circle,_#9FCC45_4px,_transparent_4.5px)] bg-[size:16px_16px] pointer-events-none rounded-full"></span>
                    THE<br/>STREET<br/>CLUB
                </h2>
                
                <p className="font-host text-2xl font-bold mb-12 max-w-lg z-10 text-[#FDFDFD]">Sign up for texts and get 15% off your first O KIA order!</p>
                
                {/* Massive Email Sign Up Bubble */}
                <div className="w-full max-w-xl flex flex-col gap-4 mb-24 z-10">
                    <input type="email" placeholder="Email Address" className="w-full rounded-full border-[3px] border-[#9FCC45] bg-[#FDFDFD] px-8 py-5 font-host font-bold text-[#6E0D31] outline-none text-xl" />
                    <button className="w-full bg-[#E84596] text-[#6E0D31] font-inter font-black text-2xl uppercase py-5 rounded-full border-[3px] border-[#6E0D31] hover:translate-y-[-4px] transition-transform shadow-[0_6px_0_#9FCC45]">Sign Up</button>
                </div>

                {/* Footer Links Grid matching Poppi thick typography */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 font-host font-black text-xl text-left uppercase text-[#9FCC45] tracking-widest z-10">
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Shop Menu</a>
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Find Us</a>
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Our Story</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">FAQ</a>
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Contact Us</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Terms</a>
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">Instagram</a>
                        <a href="#" className="hover:text-[#FDFDFD] transition-colors hover:translate-x-1">TikTok</a>
                    </div>
                </div>

                {/* Massive Bottom Base Logo */}
                 <div className="w-full max-w-[1000px] aspect-[4/1] relative opacity-90 mt-12 mb-8 pointer-events-none hover:scale-105 transition-transform duration-500">
                    <Image src="/LOGO_OKIA.svg" alt="O KIA Footer Logo" fill className="object-contain" />
                </div>
            </div>

            {/* New Footer Artwork Asset - Moved outside max-w container for full width */}
            <div className="w-full h-[300px] md:h-[600px] relative mt-8 overflow-hidden">
                <Image src="/half tone street culture/footer.svg" alt="Footer Artwork" fill className="object-contain object-bottom" />
            </div>
        </footer>
    );
}
