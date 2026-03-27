'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function ContactPage() {
    return (
        <main className="w-full min-h-screen bg-neutral p-2 flex flex-col gap-2 overflow-x-hidden relative">
            
            {/* Navbar container */}
            <div className="w-full flex justify-center sticky top-0 z-[90] pointer-events-none">
                <div className="w-full max-w-full px-0 pointer-events-auto">
                    <Navbar />
                </div>
            </div>

            {/* Main Contact Grid Expansion */}
            <div className="flex-1 flex flex-col lg:flex-row gap-2 min-h-[85vh]">
                
                {/* Left Block: Contact Details */}
                <div className="flex-1 bg-[#9FCC45] rounded-[32px] relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-16 border-sticker min-h-[450px] md:min-h-[500px]">
                    <div className="w-full max-w-2xl text-center flex flex-col items-center z-10">
                        <h1 className="font-okia text-5xl md:text-8xl lg:text-9xl text-[#6E0D31] mb-6 md:mb-10 tracking-widest uppercase drop-shadow-sm">
                            Contact Us
                        </h1>
                        
                        <div className="space-y-6 md:space-y-10 text-[#6E0D31] font-host text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-tight">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <span className="opacity-60 text-sm md:text-lg">Address</span>
                                <p>Ngong Road, Near Prestige Plaza, Nairobi, Kenya</p>
                            </div>
                            
                            <div className="flex flex-col gap-1 md:gap-2">
                                <span className="opacity-60 text-sm md:text-lg">Call Us</span>
                                <p>+254 (0) 712 345 678</p>
                            </div>
                            
                            <div className="flex flex-col gap-1 md:gap-2">
                                <span className="opacity-60 text-sm md:text-lg">Hours</span>
                                <p>Mon - Sun: 7:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                        <a 
                            href="https://wa.me/254712345678" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-10 md:mt-16 bg-[#E84596] text-[#6E0D31] font-host font-black text-xl md:text-3xl uppercase px-8 md:px-12 py-4 md:py-6 rounded-full border-[3px] md:border-[4px] border-[#6E0D31] hover:scale-105 transition-transform shadow-[4px_4px_0_#6E0D31] md:shadow-[6px_6px_0_#6E0D31] flex items-center gap-4 active:translate-y-[2px] active:shadow-none"
                        >
                            <span>Book with WhatsApp</span>
                        </a>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-10 pointer-events-none rotate-12">
                        <Image src="/LOGO_OKIA.svg" alt="" fill className="object-contain" />
                    </div>
                </div>

                {/* Right Block: Map Expansion */}
                <div className="flex-1 bg-[#E84596] rounded-[32px] relative overflow-hidden flex items-center justify-center border-sticker p-4 md:p-8 min-h-[500px]">
                    <div className="relative w-full h-full min-h-[450px] rounded-[24px] overflow-hidden border-[4px] border-[#6E0D31] group shadow-2xl">
                        <Image 
                            src="/images/map.png" 
                            alt="Location Map" 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                        {/* Overlay Tag */}
                        <div className="absolute top-10 right-10 bg-[#9FCC45] text-[#6E0D31] px-8 py-4 rounded-full font-host font-black text-xl md:text-2xl uppercase border-[3px] border-[#6E0D31] rotate-6 shadow-[4px_4px_0_#6E0D31] hover:-rotate-3 transition-transform cursor-pointer">
                            Find us here
                        </div>
                        
                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-10 left-10 right-10 bg-[#FDFDFD]/90 backdrop-blur-md p-6 rounded-[24px] border-sticker transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             <p className="font-host font-black text-[#6E0D31] text-lg uppercase">We are located at the heart of Nairobi&apos;s coffee culture. Drop by for the theater of flavor!</p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
