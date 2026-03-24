'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/Food&Drink/0M9A8146.jpg',
    '/Food&Drink/0M9A8014.jpg',
    '/Food&Drink/0M9A7996.jpg'
];

export default function DrinksCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);

    return (
        <div className="flex-[2] bg-[#9FCC45] rounded-[32px] p-6 relative overflow-hidden flex flex-col items-center group">
            <h2 className="font-okia text-4xl md:text-5xl text-[#6E0D31] tracking-widest mb-6 z-10 drop-shadow-sm uppercase">Signature Drinks</h2>
            
            <div className="flex-1 w-full relative rounded-2xl overflow-hidden border-sticker shadow-xl z-10 bg-[#6E0D31] group/carousel">
                {/* Manual Navigation Controls */}
                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-20 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">&lt;</button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-20 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">&gt;</button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                            src={images[currentIndex]}
                            alt="Drinks Highlight"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
