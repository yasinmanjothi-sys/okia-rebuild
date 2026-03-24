'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/Screenshot 2026-03-06 at 15.12.15.png',
    '/images/Screenshot 2026-03-06 at 15.12.38.png',
    '/images/Screenshot 2026-03-06 at 15.13.12.png',
];

export default function Row3MediaGrid() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);

    return (
        <div className="w-full flex flex-col md:flex-row gap-2 min-h-[70vh]">
            
            {/* Left Box: SENSORY OVERLOAD */}
            <div className="flex-[1.5] bg-[#FFD695] rounded-[32px] p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="z-10 text-center flex flex-col items-center select-none pointer-events-none">
                    <h2 className="font-playwrite text-4xl md:text-5xl lg:text-6xl text-[#E84596] mb-4 drop-shadow-sm rotate-[-5deg]">Sensory</h2>
                    <h2 className="font-okia text-5xl md:text-7xl lg:text-8xl text-[#6E0D31] tracking-widest drop-shadow-lg">OVERLOAD</h2>
                </div>
                
                <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 w-32 h-32 opacity-80 mix-blend-multiply">
                    <div className="w-full h-full rounded-full border-[10px] border-[#E84596] border-dotted pointer-events-none"></div>
                </motion.div>

                <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 md:w-80 md:h-80 opacity-90 drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                    <Image src="/all masks /No (anger).svg" alt="Theatrical Mask Graphic" fill className="object-contain" />
                </div>
            </div>

            {/* Right Box: VIBE CHECK CAROUSEL */}
            <div className="flex-[2] bg-[#9FCC45] rounded-[32px] overflow-hidden relative group/carousel p-2 border-sticker flex flex-col">
                 <div className="w-full h-full min-h-[400px] relative rounded-[24px] overflow-hidden bg-[#6E0D31] flex flex-col items-center justify-center">
                     
                     <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-30 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">&lt;</button>
                     <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-30 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">&gt;</button>
                     
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

                     {/* Gradient and Vibe Check label removed per request */}
                 </div>
            </div>

        </div>
    );
}
