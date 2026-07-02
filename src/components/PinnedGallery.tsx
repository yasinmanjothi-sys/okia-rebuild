'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

// The establishment itself — real render walkthroughs of the O KIA space, not stock food photography.
const images = [
    '/images/Screenshot 2026-03-06 at 15.12.15.png',
    '/images/Screenshot 2026-03-06 at 15.14.00.png',
    '/images/Screenshot 2026-03-06 at 15.13.33.png',
    '/images/Screenshot 2026-03-06 at 15.14.41.png',
    '/images/Screenshot 2026-03-06 at 15.18.27.png',
];

const n = images.length;
const segment = 1 / n;

function Slide({ src, index, progress }: { src: string; index: number; progress: ReturnType<typeof useMotionValue<number>> }) {
    const start = index * segment;
    const end = (index + 1) * segment;
    const fadeIn = Math.max(0, start - segment * 0.4);
    const fadeOut = Math.min(1, end + segment * 0.1);
    const opacity = useTransform(progress, [fadeIn, start, fadeOut - segment * 0.3, fadeOut], [0, 1, 1, 0]);
    const scale = useTransform(progress, [fadeIn, start], [1.04, 1]);

    return (
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
            <Image src={src} alt="" fill className="object-cover" priority={index === 0} />
        </motion.div>
    );
}

export default function PinnedGallery() {
    const runwayRef = useRef<HTMLDivElement>(null);
    const progress = useMotionValue(0);

    useEffect(() => {
        const root = document.getElementById('scroll-root');
        if (!root) return;

        const handler = () => {
            const el = runwayRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const scrolled = -rect.top;
            const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
            progress.set(p);
        };

        handler();
        root.addEventListener('scroll', handler, { passive: true });
        window.addEventListener('resize', handler);
        return () => {
            root.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [progress]);

    const goTo = (index: number) => {
        const root = document.getElementById('scroll-root');
        const el = runwayRef.current;
        if (!root || !el) return;
        const total = el.getBoundingClientRect().height - window.innerHeight;
        const runwayTop = el.getBoundingClientRect().top + root.scrollTop;
        const targetP = Math.min(1, Math.max(0, index / n + segment / 2));
        root.scrollTo({ top: runwayTop + targetP * total, behavior: 'smooth' });
    };

    const step = (dir: 1 | -1) => {
        const current = Math.min(n - 1, Math.floor(progress.get() * n));
        goTo(Math.min(n - 1, Math.max(0, current + dir)));
    };

    return (
        <div ref={runwayRef} data-nav-theme="dark" style={{ height: `${n * 100}vh` }} className="relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-maroon">
                {images.map((src, i) => (
                    <Slide key={src} src={src} index={i} progress={progress} />
                ))}

                <div className="absolute bottom-8 right-8 flex gap-3 z-10">
                    <button
                        onClick={() => step(-1)}
                        aria-label="Previous image"
                        className="w-11 h-11 rounded-full border border-neutral/70 text-neutral flex items-center justify-center hover:bg-neutral hover:text-maroon transition-colors"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={() => step(1)}
                        aria-label="Next image"
                        className="w-11 h-11 rounded-full border border-neutral/70 text-neutral flex items-center justify-center hover:bg-neutral hover:text-maroon transition-colors"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
