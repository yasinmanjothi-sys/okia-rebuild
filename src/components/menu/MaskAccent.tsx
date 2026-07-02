import Image from 'next/image';

type MaskName = 'joy' | 'love' | 'anger' | 'sadness' | 'surprise';

const MASKS: Record<MaskName, { src: string; alt: string }> = {
    joy: { src: '/Main Masks Outline/Hy (joy) svg.svg', alt: 'Hỷ — the Joy mask' },
    love: { src: '/Main Masks Outline/Ai (love).svg', alt: 'Ái — the Love mask' },
    anger: { src: '/Main Masks Outline/No (anger).svg', alt: 'Nộ — the Anger mask' },
    sadness: { src: '/Main Masks Outline/O (sadness).svg', alt: 'Ố — the Sadness mask' },
    surprise: { src: '/Main Masks Outline/O kia (surprise).svg', alt: 'Ô Kìa — the Surprise mask' },
};

type MaskAccentProps = {
    mask: MaskName;
    size?: number;
    className?: string;
};

/**
 * A small decorative accent using one of the real five brand masks, rendered
 * as plain black line work (fill: none, stroke: #000 — see
 * public/Main Masks Outline/) rather than the flat full-color brand icons,
 * matching the printed menu boards' own badge style.
 *
 * Deliberately does NOT set its own `position` — every caller passes
 * `absolute` via `className`, and hardcoding `relative` here previously
 * fought that class in the cascade (same-specificity utilities resolve by
 * stylesheet order, not by where they appear in the class list), silently
 * breaking every instance's positioning.
 */
export default function MaskAccent({ mask, size = 70, className = '' }: MaskAccentProps) {
    const { src, alt } = MASKS[mask];
    return (
        <div className={className} style={{ width: size, height: size }}>
            <Image src={src} alt={alt} fill className="object-contain" />
        </div>
    );
}
