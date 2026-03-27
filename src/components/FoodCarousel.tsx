'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/signature food/57d79361-befa-42f8-aaaf-d22e0f967c3c--2022-0811_pan-fried-tofu_seo_final_3x2_julia-gartland_171.jpg',
    '/signature food/Chilli-prawns-bao-buns_landscape_Hero_side-on-2_HR-e1695683104967.jpg',
    '/signature food/Goi-Cuon-Vietnamese-Spring-Rolls.jpg.jpg',
    '/signature food/Lemongrass-Pork-Banh-Mi.jpg'
];

export default function FoodCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);

    return (
        <div className="flex-[2] bg-[#FFD695] rounded-[32px] p-6 relative overflow-hidden flex flex-col items-center group">
            <h2 className="font-okia text-4xl md:text-5xl text-[#6E0D31] tracking-widest mb-6 z-10 drop-shadow-sm uppercase text-center">Signature Food</h2>
            
            <div className="flex-1 w-full min-h-[300px] md:min-h-[400px] relative rounded-2xl overflow-hidden border-sticker shadow-xl z-10 bg-[#6E0D31] group/carousel">
                {/* Navigation Controls */}
                <button 
                    onClick={handlePrev} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-20 hover:scale-110 transition-all shadow-md opacity-100"
                    aria-label="Previous image"
                >
                    &lt;
                </button>
                <button 
                    onClick={handleNext} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FDFDFD]/90 backdrop-blur border-sticker rounded-full flex items-center justify-center font-bold text-[#6E0D31] text-2xl z-20 hover:scale-110 transition-all shadow-md opacity-100"
                    aria-label="Next image"
                >
                    &gt;
                </button>

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
                            alt={`Food Highlight ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
