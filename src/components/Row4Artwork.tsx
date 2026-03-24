'use client';
import Image from 'next/image';

export default function Row4Artwork() {
    return (
        <div className="w-full flex flex-col md:flex-row gap-2 min-h-[60vh]">
            <div className="flex-1 bg-[#9FCC45] rounded-[32px] relative overflow-hidden flex items-center justify-center p-8 group border-sticker">
                <div className="relative w-full h-full">
                    <Image 
                        src="/half tone street culture/street culture halftones-01.svg" 
                        alt="Halftone Art 1" 
                        fill 
                        className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                    />
                </div>
            </div>
            <div className="flex-1 bg-[#E84596] rounded-[32px] relative overflow-hidden flex items-center justify-center p-8 group border-sticker">
                <div className="relative w-full h-full">
                    <Image 
                        src="/half tone street culture/street culture halftones-02.svg" 
                        alt="Halftone Art 2" 
                        fill 
                        className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                    />
                </div>
            </div>
        </div>
    );
}
