'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type RibbonProps = {
    items: string[];
    bgColor: string;
    textColor: string;
    maskIcon?: boolean;
    pureMasks?: boolean;
    tilt?: string;
    speed?: number;
};

export default function AnimatedRibbon({ items, bgColor, textColor, maskIcon, pureMasks, tilt = "", speed = 40 }: RibbonProps) {
    const maskImages = [
        "/all masks /Ai (love).svg",
        "/all masks /Hy (joy) svg.svg",
        "/all masks /No (anger).svg",
        "/all masks /O (sadness).svg",
        "/all masks /OKIA-Mask-All-24-11-25-10.svg"
    ];

    // 1. Artificially expand the array massively so it GUARANTEES spanning way off the physical screen.
    const baseItems = Array(15).fill(items).flat();

    // 2. Velocity Normalization:
    // If we just use 'speed', a short array moving -50% visually flies much faster than a long array moving -50% in the same time.
    // By multiplying by baseItems.length, we lock the time-per-element visually so all ribbons crawl at identical paces.
    const calculatedDuration = baseItems.length * (speed / 10);

    const RibbonContent = () => (
        <div className="flex items-center shrink-0 min-w-max">
            {baseItems.map((item, index) => (
                <div key={index} className="flex items-center shrink-0 pr-12 lg:pr-16">
                    {pureMasks ? (
                        <div className="w-12 h-12 md:w-16 md:h-16 relative hover:scale-[1.2] transition-transform duration-500 cursor-pointer drop-shadow-md">
                            <Image src={maskImages[index % maskImages.length]} alt="O KIA Mask" fill className="object-contain" />
                        </div>
                    ) : (
                        <>
                            <span className="font-okia text-lg md:text-xl lg:text-2xl tracking-widest uppercase shrink-0 mt-1">{item}</span>
                            {maskIcon && (
                                <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0 drop-shadow-sm ml-12 lg:ml-16 hover:rotate-12 transition-transform">
                                    <Image src={maskImages[index % maskImages.length]} alt="mask graphic" fill className="object-contain" />
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className={`w-full overflow-hidden flex items-center py-2 md:py-3 border-y-[2px] border-[#6E0D31] z-50 whitespace-nowrap shadow-sm ${bgColor} ${textColor} ${tilt}`}>
            {/* 3. The Flawless Loop: We render RibbonContent exactly twice. Translating exactly -50% means Ribbon 1 visually replaces Ribbon 2 without a single pixel of gap seam. */}
            <motion.div
                className="flex items-center shrink-0 min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: { repeat: Infinity, repeatType: "loop", duration: calculatedDuration, ease: "linear" },
                }}
            >
                <RibbonContent />
                <RibbonContent />
            </motion.div>
        </div>
    );
}
