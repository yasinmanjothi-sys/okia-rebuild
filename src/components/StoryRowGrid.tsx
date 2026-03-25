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

export default function StoryRowGrid() {
    const [triviaIndex, setTriviaIndex] = useState(0);
    const [isRightHovered, setIsRightHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTriviaIndex((prev) => (prev === triviaItems.length - 1 ? 0 : prev + 1));
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full flex flex-col lg:flex-row gap-2 min-h-[90vh]">
            {/* Left Column */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                {/* Left Top Block [Large] - Pink (#E84596) */}
                <div className="flex-[2] bg-[#E84596] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col items-center border-sticker shadow-inner">
                    {/* Trivia SVG Illustration - Max size, bleeding off bottom to hide sharp edges */}
                    <div className="absolute bottom-[-20px] right-0 w-full h-[220px] md:h-[320px] z-0 pointer-events-none">
                        <Image 
                            src="/half tone street culture/trivia.svg" 
                            alt="Vietnamese Coffee Illustration" 
                            fill 
                            className="object-contain object-right-bottom"
                        />
                    </div>

                    <div className="z-10 text-center w-full max-w-lg mt-4 md:mt-8">
                        {/* Match Story Title Style and Positioning */}
                        <h2 className="font-okia text-4xl md:text-5xl lg:text-6xl text-[#6E0D31] text-center drop-shadow-md mb-8 md:mb-12 uppercase tracking-widest">
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
                                    className="font-host text-2xl md:text-4xl lg:text-5xl text-[#6E0D31] font-black uppercase leading-tight tracking-tight"
                                >
                                    {triviaItems[triviaIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                
                {/* Left Bottom Block [Small] - Green (#9FCC45) */}
                <div className="flex-[0.5] bg-[#9FCC45] rounded-[32px] p-8 flex flex-col justify-center items-center relative overflow-hidden border-sticker shadow-inner">
                    <span className="font-okia text-3xl text-[#6E0D31] tracking-[0.2em] z-10 uppercase">Authentic</span>
                </div>
            </div>

            {/* Center Column: The Story Block */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                <div className="flex-1 bg-[#6E0D31] rounded-[32px] p-8 md:p-12 flex flex-col items-center overflow-hidden w-full relative group border-sticker">
                    {/* Halftone Overlay - KEPT ONLY HERE */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_#FDFDFD_2px,_transparent_2.5px)] bg-[size:16px_16px] opacity-10 pointer-events-none z-0" />
                    
                    {/* Footer SVG Artwork - Behind Curtains */}
                    <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[250px] z-0 pointer-events-none opacity-80">
                        <Image 
                            src="/half tone street culture/footer.svg" 
                            alt="Vietnamese Street Culture Art Background" 
                            fill 
                            className="object-contain object-bottom"
                        />
                    </div>

                    {/* Integrated Frame SVG - On top of footer art */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <Image 
                            src="/Curtains for story section .svg" 
                            alt="Story Section Frame" 
                            fill 
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h2 className="font-okia text-4xl md:text-5xl lg:text-6xl !text-[#9FCC45] text-center drop-shadow-md mb-12 uppercase tracking-widest z-20 mt-8">
                        The Story
                    </h2>

                    <div className="flex-1 w-full flex flex-col gap-8 overflow-y-auto no-scrollbar z-20 text-[#9FCC45] relative px-4">
                        <p className="font-host text-xl md:text-2xl font-bold leading-relaxed text-center italic max-w-[85%] mx-auto">
                            "O KIA — an expression of surprise, wonder, and sensory delight."
                        </p>
                        
                        <div className="space-y-6 font-inter text-lg md:text-xl font-light tracking-wide text-center max-w-[85%] mx-auto">
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

            {/* Right Column */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                {/* Right Top Block [Large] - Orange (#FFD695) */}
                <div className="flex-[2] bg-[#FFD695] rounded-[32px] p-6 relative overflow-hidden flex flex-col items-center justify-center border-sticker shadow-inner">
                    <div className="z-10 text-center">
                        <h3 className="font-okia text-4xl text-[#6E0D31] uppercase tracking-tighter mb-2">Saigon</h3>
                        <p className="font-playwrite italic text-[#6E0D31] text-lg">Street Soul</p>
                    </div>
                </div>
                
                {/* Right Bottom Block [Small] - White (#FDFDFD) */}
                <motion.div 
                    onMouseEnter={() => setIsRightHovered(true)}
                    onMouseLeave={() => setIsRightHovered(false)}
                    className="flex-[0.5] bg-[#FDFDFD] rounded-[32px] p-8 flex flex-col justify-center items-center relative overflow-hidden group border-sticker cursor-pointer shadow-inner"
                >
                    <motion.span 
                        animate={{ scale: isRightHovered ? 1.1 : 1 }}
                        className="font-okia text-4xl md:text-5xl text-[#6E0D31] tracking-[0.2em] z-10 uppercase transition-all"
                    >
                        Ô KÌA!
                    </motion.span>

                    <AnimatePresence>
                        {isRightHovered && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="font-playwrite italic text-[#E84596] text-lg md:text-xl mt-2 tracking-widest z-10"
                            >
                                Taste the Surprise
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
