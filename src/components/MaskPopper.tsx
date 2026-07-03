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
    /** Seconds the rise (and, symmetrically, the sink) itself takes. */
    riseDuration?: number;
    /** Seconds the mask stays fully risen — eyes clear, holding — before it sinks back. */
    holdDuration?: number;
    /** Seconds between the start of one appearance and the start of the next — set well
     *  above the total active time (rise + hold + sink) so masks take turns instead of
     *  overlapping. */
    cyclePeriod?: number;
};

// Fraction of the mask's own height/width exposed by the porthole at full
// rise — kept well above half so the reveal always clears past the eye line
// instead of stopping at the mask's exact vertical/horizontal midpoint.
const REVEAL = 0.72;

/**
 * Each slot is a small "porthole" — an overflow-hidden window sized to
 * `REVEAL` of the mask, docked at one edge of the hero and always extending
 * *inward* from its anchor edge (e.g. a bottom-edge porthole grows upward
 * into the section, never downward past the section's own bottom, which
 * would let the section's own overflow-hidden silently re-clip the reveal).
 * Depending on `direction`, the mask enters from below/above/left/right and
 * only ever shows the portion of itself nearest the opening (the rest stays
 * cropped by the porthole's own edge) — rising/dropping/sliding into view
 * enough to clear the eyes, holding there for a beat, retreating fully out
 * of sight, then jumping to a new slot while hidden and doing it again. Only
 * one axis (x or y) ever moves, and both are always given explicit
 * keyframes, so framer-motion never leaves a stale transform behind when the
 * direction changes between slots.
 */
export default function MaskPopper({ src, alt, slots, size = 110, delay = 0, riseDuration = 0.8, holdDuration = 1.4, cyclePeriod = 4.6 }: MaskPopperProps) {
    const [slotIndex, setSlotIndex] = useState(0);
    const activeDuration = riseDuration * 2 + holdDuration;
    const pause = Math.max(0, cyclePeriod - activeDuration);
    const times = [0, riseDuration / activeDuration, (riseDuration + holdDuration) / activeDuration, 1];

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
    const reveal = size * REVEAL;
    const hidden = size * (REVEAL + 0.02);

    const maskStyle: React.CSSProperties = { width: size, height: size, top: 0, left: 0 };
    let xKeyframes = [0, 0, 0, 0];
    let yKeyframes = [0, 0, 0, 0];

    switch (direction) {
        case 'up':
            yKeyframes = [hidden, 0, 0, hidden];
            break;
        case 'down':
            maskStyle.top = -size * (1 - REVEAL);
            yKeyframes = [-hidden, 0, 0, -hidden];
            break;
        case 'left':
            maskStyle.left = -size * (1 - REVEAL);
            xKeyframes = [-hidden, 0, 0, -hidden];
            break;
        case 'right':
            xKeyframes = [hidden, 0, 0, hidden];
            break;
    }

    const containerStyle: React.CSSProperties = {
        top: slot.top,
        left: slot.left,
        width: isVertical ? size : reveal,
        height: isVertical ? reveal : size,
        marginLeft: isVertical ? -size / 2 : direction === 'right' ? -reveal : 0,
        marginTop: !isVertical ? -size / 2 : direction === 'up' ? -reveal : 0,
    };

    return (
        <div className="absolute overflow-hidden pointer-events-none" style={containerStyle}>
            <motion.div
                className="absolute"
                style={maskStyle}
                animate={{ x: xKeyframes, y: yKeyframes }}
                transition={{ duration: activeDuration, times, delay, repeat: Infinity, repeatDelay: pause, ease: 'easeInOut' }}
            >
                <Image src={src} alt={alt} fill className="object-contain" />
            </motion.div>
        </div>
    );
}
