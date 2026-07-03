'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const VIDEO_SRC = '/Hero Video.mp4';
const POSTER_SRC = '/images/Screenshot 2026-03-06 at 15.12.15.png';

// Total scroll runway. The curtain finishes rising well before the runway
// ends so the reveal holds on screen for a beat before the next section takes over.
const RUNWAY_VH = 260;
const RISE_FRACTION = 0.65;

/**
 * Pinned scrollytelling reveal: the section stays pinned to the viewport while
 * its runway scrolls underneath. Raw scroll progress is run through a spring
 * (not applied 1:1) so the curtain visibly eases and settles rather than
 * snapping instantly to the scroll position — that lag is what reads as an
 * actual "rise" instead of a static jump cut.
 */
export default function CurtainReveal() {
    const runwayRef = useRef<HTMLDivElement>(null);
    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, { stiffness: 110, damping: 26, mass: 0.6 });
    const curtainY = useTransform(smoothProgress, (p) => `${-Math.min(1, p / RISE_FRACTION) * 100}%`);

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

    return (
        <div ref={runwayRef} data-nav-theme="dark" style={{ height: `${RUNWAY_VH}vh` }} className="relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-maroon">
                {/* What the curtain reveals */}
                <div className="absolute inset-0">
                    <video autoPlay muted loop playsInline poster={POSTER_SRC} className="w-full h-full object-cover">
                        <source src={VIDEO_SRC} type="video/mp4" />
                    </video>
                </div>

                {/* The curtain itself — its position tracks (spring-smoothed) scroll progress through the runway */}
                <motion.div
                    className="absolute inset-x-0 top-0 z-10"
                    style={{
                        y: curtainY,
                        height: '106%',
                        backgroundColor: '#6E0D31',
                        backgroundImage:
                            'repeating-linear-gradient(90deg, rgba(0,0,0,0.22) 0px, transparent 16px, rgba(255,255,255,0.06) 32px, transparent 48px), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 10%, transparent 85%, rgba(0,0,0,0.5) 100%)',
                        boxShadow: '0 40px 70px -25px rgba(0,0,0,0.65)',
                    }}
                />
            </div>
        </div>
    );
}
