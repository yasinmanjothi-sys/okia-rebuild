'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function FloatingStickers() {
    const { scrollYProgress } = useScroll();

    // Subtle parallax shifts
    const y1 = useTransform(scrollYProgress, [0, 1], [-100, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [150, -300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const y4 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
    
    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-multiply h-full w-full">
            <motion.div style={{ y: y1 }} className="absolute top-[800px] left-[5%] hover-pop pointer-events-auto w-32 h-32 md:w-48 md:h-48 cursor-pointer">
                <Image src="/all masks /OKIA-Mask-All-24-11-25-10.svg" alt="Badge" fill className="object-contain opacity-30" />
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute top-[1600px] right-[8%] hover-pop pointer-events-auto w-40 h-40 md:w-64 md:h-64 cursor-pointer">
                <Image src="/all masks /Hy (joy) svg.svg" alt="Mask Badge" fill className="object-contain opacity-30" />
            </motion.div>

            <motion.div style={{ y: y3 }} className="absolute top-[2800px] left-[15%] hover-pop pointer-events-auto w-24 h-24 md:w-40 md:h-40 cursor-pointer">
                <Image src="/all masks /Ai (love).svg" alt="Mask Badge" fill className="object-contain opacity-30" />
            </motion.div>

            <motion.div style={{ y: y4 }} className="absolute top-[4000px] right-[10%] hover-pop pointer-events-auto w-28 h-28 md:w-56 md:h-56 cursor-pointer">
                <Image src="/LOGO_OKIA.svg" alt="Brand Label" fill className="object-contain opacity-20" />
            </motion.div>
        </div>
    );
}
