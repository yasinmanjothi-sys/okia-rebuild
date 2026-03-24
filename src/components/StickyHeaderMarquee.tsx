'use client';
import { motion } from 'framer-motion';

export default function StickyHeaderMarquee() {
    const textItems = Array.from({ length: 15 }, (_, i) => 
        i % 2 === 0 ? "Ô kìa" : "Oh, look"
    );

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-pink text-maroon overflow-hidden py-2 border-b-[2px] border-maroon z-[100] pointer-events-none">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25
                }}
            >
                {[...textItems, ...textItems].map((text, idx) => (
                    <div key={idx} className="flex items-center">
                        <span className="font-okia text-sm md:text-base uppercase tracking-widest mx-6 leading-none">
                            {text}
                        </span>
                        {/* Poppi style star divider in the marquee */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L15.5 8.5L24 12L15.5 15.5L12 24L8.5 15.5L0 12L8.5 8.5L12 0Z" />
                        </svg>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
