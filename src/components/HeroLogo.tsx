'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useHeroLogoCollapsed } from '@/components/HeroLogoContext';

/**
 * The big centered hero logo (the circular OKIA emblem, in white). Fades in
 * at the top of the page and fades out as the hero scrolls past — at which
 * point the navbar's own (different) logo takes over, so this simply
 * disappears rather than morphing into it.
 */
export default function HeroLogo() {
    const collapsed = useHeroLogoCollapsed();

    return (
        <AnimatePresence>
            {!collapsed && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="relative w-[150px] h-[167px] md:w-[300px] md:h-[333px]"
                >
                    <Image src="/LOGO_OKIA.svg" alt="O KIA" fill className="object-contain invert brightness-0" priority />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
