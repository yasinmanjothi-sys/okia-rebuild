'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/Screenshot 2026-03-06 at 15.12.15.png',
    '/images/Screenshot 2026-03-06 at 15.12.38.png',
    '/images/Screenshot 2026-03-06 at 15.13.12.png',
    '/images/Screenshot 2026-03-06 at 15.13.33.png',
    '/images/Screenshot 2026-03-06 at 15.14.00.png',
    '/images/Screenshot 2026-03-06 at 15.14.22.png',
    '/images/Screenshot 2026-03-06 at 15.14.41.png',
    '/images/Screenshot 2026-03-06 at 15.15.10.png',
    '/images/Screenshot 2026-03-06 at 15.18.27.png',
];

const peekingMasks = [
    { src: "/all masks /No (anger).svg", pos: "bottom-[-10%] right-[-5%]", rotate: 15 },
    { src: "/all masks /Ai (love).svg", pos: "top-[-10%] left-[-5%]", rotate: -15 },
    { src: "/all masks /Hy (joy) svg.svg", pos: "top-[-10%] right-[-5%]", rotate: 15 },
    { src: "/all masks /O (sadness).svg", pos: "bottom-[-10%] left-[-5%]", rotate: -15 },
    { src: "/all masks /O kia (surprise).svg", pos: "bottom-[-15%] right-[20%]", rotate: 5 },
];

export default function Row3MediaGrid() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maskIndex, setMaskIndex] = useState(0);

    useEffect(() => {
        const maskTimer = setInterval(() => {
            setMaskIndex((prev) => (prev === peekingMasks.length - 1 ? 0 : prev + 1));
        }, 3500);
        return () => clearInterval(maskTimer);
    }, []);

    const handleNext = () => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);

    const currentMask = peekingMasks[maskIndex];

    return (
        <div className="w-full flex flex-col md:flex-row gap-2 min-h-[70vh]">
            
            {/* Left Box: SENSORY OVERLOAD */}
            <motion.div 
                animate={{ 
                    backgroundColor: ['#6E0D31', '#E84596', '#FFD695', '#9FCC45', '#6E0D31'] 
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 12, 
                    ease: "linear" 
                }}
                className="flex-[1.5] rounded-[32px] p-8 flex items-center justify-center relative overflow-hidden group border-sticker"
            >
                {/* Halftone Layer 1: Rotating Dots */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-[-50%] opacity-15 pointer-events-none z-0 bg-[radial-gradient(circle,_#000_1.5px,_transparent_2px)] bg-[size:12px_12px] mix-blend-multiply"
                />

                {/* Halftone Layer 2: Counter-Rotating Large Dots */}
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    className="absolute inset-[-50%] opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_#000_3px,_transparent_3.5px)] bg-[size:24px_24px] mix-blend-multiply"
                />

                <div className="z-10 text-center flex flex-col items-center select-none pointer-events-none">
                    <h2 className="font-playwrite text-4xl md:text-5xl lg:text-6xl text-[#E84596] mb-4 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] rotate-[-5deg]">Sensory</h2>
                    <h2 className="font-okia text-5xl md:text-7xl lg:text-8xl text-[#6E0D31] tracking-widest drop-shadow-[0_4px_4px_rgba(255,255,255,0.5)]">OVERLOAD</h2>
                </div>
                
                {/* Cycling Peeking Masks */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={maskIndex}
                        initial={{ opacity: 0, scale: 0.5, rotate: currentMask.rotate * 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: currentMask.rotate }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className={`absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-90 drop-shadow-2xl z-20 ${currentMask.pos}`}
                    >
                        <Image 
                            src={currentMask.src} 
                            alt="Peeking Mask" 
                            fill 
                            className="object-contain" 
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Right Box: VIBE CHECK CAROUSEL */}
            <div className="flex-[2] bg-[#9FCC45] rounded-[32px] overflow-hidden relative group/carousel p-2 border-sticker flex flex-col">
                 <div className="w-full h-full min-h-[400px] relative rounded-[24px] overflow-hidden bg-[#6E0D31] flex flex-col items-center justify-center">
                     
                     <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-30 hover:scale-110 transition-all shadow-md opacity-100">&lt;</button>
                     <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-30 hover:scale-110 transition-all shadow-md opacity-100">&gt;</button>
                     
                     <AnimatePresence mode="wait">
                         <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full z-0">
                             <Image 
                                 src={images[currentIndex]}
                                 alt="Experience Carousel"
                                 fill
                                 className="object-cover opacity-90"
                             />
                         </motion.div>
                     </AnimatePresence>
                 </div>
            </div>

        </div>
    );
}
