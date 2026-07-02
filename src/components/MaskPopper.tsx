'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';
type Slot = { top: string; left: string; direction?: Direction };

type MaskPopperProps = {
    src: string;
    alt: string;
    slots: Slot[];
    size?: number;
    /** Seconds before this mask's very first rise. */
    delay?: number;
    /** Seconds the rise-and-sink motion itself takes. */
    duration?: number;
    /** Seconds between the start of one appearance and the start of the next — set well
     *  above `duration` (and staggered per-mask) so masks take turns instead of overlapping. */
    cyclePeriod?: number;
};

/**
 * Each slot is a small "porthole" — an overflow-hidden window exactly half the
 * mask's size, docked at one edge of the hero. Depending on `direction`, the
 * mask enters from below/above/left/right and only ever shows the half of
 * itself nearest the opening (the rest stays cropped by the porthole's own
 * edge) — rising/dropping/sliding halfway into view, retreating fully out of
 * sight, then jumping to a new slot while hidden and doing it again. Only one
 * axis (x or y) ever moves, and both are always given explicit keyframes, so
 * framer-motion never leaves a stale transform behind when the direction
 * changes between slots.
 */
export default function MaskPopper({ src, alt, slots, size = 110, delay = 0, duration = 1.3, cyclePeriod = 2.4 }: MaskPopperProps) {
    const [slotIndex, setSlotIndex] = useState(0);
    const pause = Math.max(0, cyclePeriod - duration);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        const start = setTimeout(() => {
            interval = setInterval(() => {
                setSlotIndex((i) => (i + 1) % slots.length);
            }, cyclePeriod * 1000);
        }, delay * 1000);
        return () => {
            clearTimeout(start);
            if (interval) clearInterval(interval);
        };
    }, [slots.length, delay, cyclePeriod]);

    const slot = slots[slotIndex];
    const direction = slot.direction ?? 'up';
    const isVertical = direction === 'up' || direction === 'down';
    const hidden = size * 0.52;

    const maskStyle: React.CSSProperties = { width: size, height: size, top: 0, left: 0 };
    let xKeyframes = [0, 0, 0];
    let yKeyframes = [0, 0, 0];

    switch (direction) {
        case 'up':
            yKeyframes = [hidden, 0, hidden];
            break;
        case 'down':
            maskStyle.top = -size / 2;
            yKeyframes = [-hidden, 0, -hidden];
            break;
        case 'left':
            maskStyle.left = -size / 2;
            xKeyframes = [-hidden, 0, -hidden];
            break;
        case 'right':
            xKeyframes = [hidden, 0, hidden];
            break;
    }

    const containerStyle: React.CSSProperties = {
        top: slot.top,
        left: slot.left,
        width: isVertical ? size : size / 2,
        height: isVertical ? size / 2 : size,
        marginLeft: isVertical ? -size / 2 : 0,
        marginTop: isVertical ? 0 : -size / 2,
    };

    return (
        <div className="absolute overflow-hidden pointer-events-none" style={containerStyle}>
            <motion.div
                className="absolute"
                style={maskStyle}
                animate={{ x: xKeyframes, y: yKeyframes }}
                transition={{ duration, delay, repeat: Infinity, repeatDelay: pause, ease: 'easeInOut' }}
            >
                <Image src={src} alt={alt} fill className="object-contain" />
            </motion.div>
        </div>
    );
}
