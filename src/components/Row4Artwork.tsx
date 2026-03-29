'use client';
import Image from 'next/image';

export default function Row4Artwork() {
    return (
        <div className="w-full lg:max-w-[1600px] lg:mx-auto flex flex-col md:flex-row gap-2 min-h-screen md:min-h-[60vh] lg:min-h-0 lg:aspect-[16/5]">
            {/* Left Block: Contact Us */}
            <div className="flex-1 bg-[#9FCC45] rounded-[32px] relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-8 border-sticker min-h-[450px] md:min-h-0 lg:min-h-0">
                <div className="w-full max-w-md text-center flex flex-col items-center">
                    <h2 className="font-okia text-5xl md:text-7xl lg:text-4xl text-[#6E0D31] mb-6 tracking-widest uppercase">
                        Contact Us
                    </h2>
                    
                    <div className="space-y-6 text-[#6E0D31] font-host text-lg md:text-xl font-black uppercase tracking-tight">
                        <div className="flex flex-col gap-1">
                            <span className="opacity-60 text-sm">Address</span>
                            <p>Ngong Road, Near Prestige Plaza, Nairobi, Kenya</p>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <span className="opacity-60 text-sm">Call Us</span>
                            <p>+254 (0) 712 345 678</p>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <span className="opacity-60 text-sm">Hours</span>
                            <p>Mon - Sun: 7:00 AM - 9:00 PM</p>
                        </div>
                    </div>

                    <a 
                        href="https://wa.me/254712345678" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-10 bg-[#E84596] text-[#6E0D31] font-host font-black text-xl uppercase px-8 py-4 rounded-full border-[3px] border-[#6E0D31] hover:scale-105 transition-transform shadow-[4px_4px_0_#6E0D31] flex items-center gap-3"
                    >
                        <span>Book with WhatsApp</span>
                    </a>
                </div>
                
                {/* Decorative element to keep the vibe */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 pointer-events-none">
                    <Image src="/LOGO_OKIA.svg" alt="" fill className="object-contain" />
                </div>
            </div>

            {/* Right Block: Google Maps */}
            <div className="flex-1 bg-[#E84596] rounded-[32px] relative overflow-hidden flex items-center justify-center border-sticker p-8 md:p-12 min-h-[400px] md:min-h-0 lg:min-h-0">
                <div className="relative w-full h-full min-h-[350px] md:min-h-0 lg:min-h-0 rounded-[24px] overflow-hidden border-[3px] border-[#6E0D31] group">
                    <Image 
                        src="/MAP.png" 
                        alt="Location Map" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Overlay Tag */}
                    <div className="absolute top-6 right-6 bg-[#9FCC45] text-[#6E0D31] px-4 py-2 rounded-full font-host font-black text-sm uppercase border-2 border-[#6E0D31] rotate-3 shadow-[2px_2px_0_#6E0D31]">
                        Find us here
                    </div>
                </div>
            </div>
        </div>
    );
}


