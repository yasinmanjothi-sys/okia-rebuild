'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const masks = [
    { src: '/all masks /Hy (joy) svg.svg', delay: 0 },
    { src: '/all masks /No (anger).svg', delay: 0.15 },
    { src: '/all masks /Ai (love).svg', delay: 0.3 },
    { src: '/all masks /O (sadness).svg', delay: 0.45 },
    { src: '/all masks /OKIA-Mask-All-24-11-25-05.svg', delay: 0.6 },
];

export default function HeroSection() {
    return (
        <section className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
            {/* Solid Spanish Purple Background Box with OVERFLOW HIDDEN to cut off the masks! */}
            <div className="absolute inset-0 w-full h-full bg-[#6E0D31] rounded-[32px] overflow-hidden z-0 shadow-inner">
                <div className="absolute inset-0 bg-[url('/halftone-placeholder.svg')] opacity-5 mix-blend-multiply"></div>
                
                {/* Peeking Mask Anchor - Placed INSIDE the hidden overflow container so they get cut off from eyes down */}
                <div className="absolute -bottom-24 left-0 w-full flex justify-around items-end z-50 px-2 md:px-8 pointer-events-none drop-shadow-xl h-full pb-0">
                    {masks.map((mask, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: "120%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ y: -15, scale: 1.05 }}
                            transition={{ 
                                type: "spring",
                                damping: 12,
                                stiffness: 80,
                                delay: mask.delay + 0.3 
                            }}
                            className="relative w-[22%] md:w-[20%] max-w-[300px] aspect-square pointer-events-auto"
                        >
                            {/* Sticker wrapper */}
                            <div className="absolute inset-0 bg-pink rounded-full border-sticker flex items-center justify-center shadow-[0_8px_0_#9FCC45]">
                                <div className="relative w-[90%] h-[90%]">
                                    <Image
                                        src={mask.src}
                                        alt={`Theatrical Mask ${idx + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Center Logo */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.1 }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center"
            >
                 <div className="w-[85vw] max-w-[450px] aspect-[4/3] relative flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-105">
                        <Image
                            src="/LOGO_OKIA.svg"
                            alt="O KIA Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(232,69,150,0.5)]"
                            priority
                        />
                 </div>
            </motion.div>
        </section>
    );
}
