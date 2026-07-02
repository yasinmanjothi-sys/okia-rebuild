import MaskPopper from '@/components/MaskPopper';

// Bottom-edge starting positions — every mask's first pop-up happens here,
// lined up along the bottom like a curtain call, before they scatter outward
// to all four edges of the frame.
const B1 = { top: '86%', left: '14%' };
const B2 = { top: '90%', left: '50%' };
const B3 = { top: '86%', left: '86%' };

// Top edge — masks drop down into view from above.
const T1 = { top: '8%', left: '20%', direction: 'down' as const };
const T2 = { top: '6%', left: '50%', direction: 'down' as const };
const T3 = { top: '8%', left: '80%', direction: 'down' as const };

// Left edge — masks slide in from off-screen left.
const L1 = { top: '30%', left: '2%', direction: 'left' as const };
const L2 = { top: '55%', left: '2%', direction: 'left' as const };
const L3 = { top: '75%', left: '2%', direction: 'left' as const };

// Right edge — masks slide in from off-screen right.
const R1 = { top: '30%', left: '94%', direction: 'right' as const };
const R2 = { top: '55%', left: '94%', direction: 'right' as const };
const R3 = { top: '75%', left: '94%', direction: 'right' as const };

// Slow, strictly one-at-a-time rhythm: each mask gets its own turn in a round
// robin, with only one ever rising at once. RISE_DURATION is long enough to
// read clearly, and STAGGER (a mask's turn length) is padded well past that
// so there's no overlap between one mask sinking and the next rising.
const RISE_DURATION = 1.5;
const STAGGER = 1.9;
const TOTAL_CYCLE = 5 * STAGGER;

const BASE_MASKS = [
    {
        src: '/Main Masks /Hy (joy) svg.svg',
        alt: 'Hỷ — the Joy mask',
        slots: [B1, L1, T2, R3],
        size: 210,
        delay: 0 * STAGGER,
    },
    {
        src: '/Main Masks /Ai (love).svg',
        alt: 'Ái — the Love mask',
        slots: [B2, R1, T3, L3],
        size: 230,
        delay: 1 * STAGGER,
    },
    {
        src: '/Main Masks /No (anger).svg',
        alt: 'Nộ — the Anger mask',
        slots: [B3, T1, L2, R2],
        size: 190,
        delay: 2 * STAGGER,
    },
    {
        src: '/Main Masks /O (sadness).svg',
        alt: 'Ố — the Sadness mask',
        slots: [B1, R2, T3, L1],
        size: 200,
        delay: 3 * STAGGER,
    },
    {
        src: '/Main Masks /O kia (surprise).svg',
        alt: 'Ô Kìa — the Surprise mask',
        slots: [B2, L2, T1, R3],
        size: 220,
        delay: 4 * STAGGER,
    },
];

type EdgeMaskFieldProps = {
    /** Scales every mask's size down for shorter sections than the full hero. */
    sizeScale?: number;
};

/**
 * All five brand masks popping in from the edges of whatever section contains
 * this — bottom, top, left, right — one at a time, sinking back and
 * reappearing elsewhere on loop. The same ambient effect used in the hero;
 * drop it into any `relative overflow-hidden` section instead of a single
 * static mask illustration.
 */
export default function EdgeMaskField({ sizeScale = 1 }: EdgeMaskFieldProps) {
    return (
        <>
            {BASE_MASKS.map((mask) => (
                <MaskPopper
                    key={mask.alt}
                    src={mask.src}
                    alt={mask.alt}
                    slots={mask.slots}
                    size={mask.size * sizeScale}
                    delay={mask.delay}
                    duration={RISE_DURATION}
                    cyclePeriod={TOTAL_CYCLE}
                />
            ))}
        </>
    );
}
