'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const triviaItems = [
    "Vietnam is the world's second-largest coffee producer.",
    "Robusta beans make up 95% of Vietnam's coffee production.",
    "Egg coffee (Cà Phê Trứng) was invented in Hanoi during a 1946 milk shortage.",
    "The Phin filter is the traditional heart of Vietnamese coffee brewing.",
    "Cà Phê Sữa Đá: The iconic Vietnamese iced coffee with condensed milk.",
    "Coffee was first introduced to Vietnam by the French in 1857.",
    "Vietnam is famous for its unique 'Weasel Coffee' (Cà Phê Chồn).",
    "In Vietnam, coffee is often enjoyed slowly, watching the world go by."
];

const maskData = [
    { name: "Ai", src: "/Main Masks /Ai (love).svg" },
    { name: "Hy", src: "/Main Masks /Hy (joy) svg.svg" },
    { name: "No", src: "/Main Masks /No (anger).svg" },
    { name: "O", src: "/Main Masks /O (sadness).svg" },
    { name: "O KIA", src: "/Main Masks /O kia (surprise).svg" }
];

const stickerData = [
    "/half tone street culture/street culture halftones-01.svg",
    "/half tone street culture/street culture halftones-02.svg",
    "/half tone street culture/street culture halftones-03.svg",
    "/half tone street culture/street culture halftones-04.svg",
    "/half tone street culture/street culture halftones-06.svg",
    "/half tone street culture/pots and cups.svg"
];

export default function StoryRowGrid() {
    const [triviaIndex, setTriviaIndex] = useState(0);
    const [maskIndex, setMaskIndex] = useState(0);
    const [stickerIndex, setStickerIndex] = useState(0);

    useEffect(() => {
        const triviaTimer = setInterval(() => {
            setTriviaIndex((prev) => (prev === triviaItems.length - 1 ? 0 : prev + 1));
        }, 8000);

        const maskTimer = setInterval(() => {
            setMaskIndex((prev) => (prev === maskData.length - 1 ? 0 : prev + 1));
        }, 4000);

        const stickerTimer = setInterval(() => {
            setStickerIndex((prev) => (prev === stickerData.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => {
            clearInterval(triviaTimer);
            clearInterval(maskTimer);
            clearInterval(stickerTimer);
        };
    }, []);

    return (
        <div className="w-full lg:max-w-[1600px] lg:mx-auto flex flex-col lg:flex-row gap-2 min-h-screen lg:min-h-0">
            {/* Center Column: The Story Block - NOW FIRST ON MOBILE */}
            <div className="flex flex-col flex-1 gap-2 order-1 lg:order-2 lg:aspect-[3/4]">
                <div className="flex-1 bg-[#6E0D31] rounded-[32px] flex flex-col items-center justify-center overflow-hidden w-full relative group border-sticker min-h-[500px] lg:min-h-0">
                    {/* Integrated Frame SVG - Ensure it hits the edges by removing parent padding for the frame specifically */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <Image 
                            src="/Curtains for story section .svg" 
                            alt="Story Section Frame" 
                            fill 
                            className="object-cover scale-x-[1.02] md:scale-x-100"
                            priority
                        />
                    </div>

                    <div className="relative z-20 flex flex-col items-center max-w-[80%] md:max-w-[75%] mx-auto p-8 md:p-12 lg:p-6 lg:py-4">
                        <h2 className="font-okia text-4xl md:text-5xl lg:text-4xl !text-[#9FCC45] text-center drop-shadow-md mb-8 lg:mb-4 uppercase tracking-widest">
                            The Story
                        </h2>

                        <div className="flex flex-col gap-6 lg:gap-3 text-[#9FCC45] text-center">
                            <p className="font-host text-2xl md:text-3xl lg:text-2xl font-black leading-tight italic uppercase tracking-tight">
                                &quot;An expression of surprise, wonder, and sensory delight.&quot;
                            </p>
                            
                            <div className="space-y-6 lg:space-y-2 font-inter text-base md:text-lg lg:text-base font-bold tracking-wide">
                                <p>
                                    Born from the vibrant street culture of Saigon and the theatrical soul of Vietnamese performance art, O KIA Coffee is more than a cafe.
                                </p>
                                <p>
                                    We bring the bold artistry and authentic tastes of Vietnam to Nairobi, creating a space where every sip tells a story and every visit is a sensory overload in the best way possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Column - NOW SECOND ON MOBILE */}
            <div className="flex flex-col flex-1 gap-2 order-2 lg:order-1 lg:aspect-[3/4]">
                {/* Left Top Block [Large] - Pink (#E84596) */}
                <div className="flex-[2] bg-[#E84596] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col items-center border-sticker shadow-inner min-h-[400px] lg:min-h-0">
                    <div className="absolute bottom-[-20px] right-0 w-full h-[220px] md:h-[320px] z-0 pointer-events-none">
                        <Image 
                            src="/half tone street culture/trivia.svg" 
                            alt="Vietnamese Coffee Illustration" 
                            fill 
                            className="object-contain object-right-bottom"
                        />
                    </div>

                    <div className="z-10 text-center w-full max-w-lg mt-4 md:mt-8">
                        <h2 className="font-okia text-4xl md:text-5xl lg:text-4xl text-[#6E0D31] text-center drop-shadow-md mb-8 md:mb-12 uppercase tracking-widest">
                            Did you know?
                        </h2>
                        
                        <div className="h-40 md:h-48 flex flex-col items-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={triviaIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="font-host text-2xl md:text-4xl lg:text-3xl text-[#6E0D31] lg:text-white font-black uppercase leading-tight tracking-tight"
                                >
                                    {triviaItems[triviaIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                
                {/* Left Bottom Block [Small] - Green (#9FCC45) - NOW CYCLING MASKS (LARGE) */}
                <div className="flex-[0.8] lg:flex-[1.2] bg-[#9FCC45] rounded-[32px] p-4 flex flex-col justify-center items-center relative overflow-hidden border-sticker shadow-inner min-h-[220px] lg:min-h-0">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={maskIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center w-full h-full gap-4 lg:gap-2"
                        >
                            <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-36 lg:h-36 aspect-square bg-[#FDFDFD] rounded-full border-[6px] border-[#E84596] shadow-xl p-4 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image src={maskData[maskIndex].src} alt={maskData[maskIndex].name} fill className="object-contain" />
                                </div>
                            </div>
                            <span className="font-okia text-4xl md:text-6xl lg:text-5xl text-[#6E0D31] tracking-[0.2em] uppercase leading-none">
                                {maskData[maskIndex].name}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Column - NOW THIRD ON MOBILE */}
            <div className="flex flex-col flex-1 gap-2 order-3 lg:order-3 lg:aspect-[3/4]">
                {/* Right Top Block [Large] - Orange (#FFD695) & CYCLING STICKERS */}
                <div className="flex-[2] bg-[#FFD695] rounded-[32px] p-8 relative overflow-hidden flex flex-col items-center justify-center border-sticker shadow-inner min-h-[240px] lg:min-h-0">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={stickerIndex}
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="relative w-full h-64 md:h-full flex items-center justify-center"
                        >
                            <div className="relative w-[85%] h-[85%]">
                                <Image 
                                    src={stickerData[stickerIndex]} 
                                    alt="Halftone Sticker" 
                                    fill 
                                    className="object-contain" 
                                    priority
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                <div className="flex-[0.5] bg-[#6E0D31] rounded-[32px] relative overflow-hidden border-sticker shadow-inner group min-h-[160px] lg:min-h-0">
                    <div className="absolute inset-0 w-full h-full">
                        <Image 
                            src="/images/masks for row 2 .png" 
                            alt="OKIA Masks" 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
