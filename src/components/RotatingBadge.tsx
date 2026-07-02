'use client';
import { motion } from 'framer-motion';
import { useId } from 'react';

type RotatingBadgeProps = {
    text: string;
    size?: number;
    color?: string;
    className?: string;
    /** Overrides the rendered width/height responsively (e.g. "w-[300px] h-[300px] md:w-[380px] md:h-[380px]").
     *  The SVG scales via its viewBox, so `size` still drives the correct text curvature. */
    containerClassName?: string;
    fontSize?: number;
    speed?: number;
};

/** Full circle of text, continuously rotating — the hero-style badge. */
export function RotatingBadge({ text, size = 220, color = 'currentColor', className = '', containerClassName, fontSize = 15, speed = 22 }: RotatingBadgeProps) {
    const id = useId();
    const r = size / 2 - fontSize;
    const repeated = `${text} • `.repeat(6);

    return (
        <motion.div
            className={`${className} ${containerClassName ?? ''}`}
            style={containerClassName ? undefined : { width: size, height: size }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        >
            <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
                <path id={id} d={`M ${size / 2},${size / 2} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} fill="none" />
                <text fill={color} fontSize={fontSize} letterSpacing="0.15em" style={{ fontFamily: 'var(--font-host)', fontWeight: 600, textTransform: 'uppercase' }}>
                    <textPath href={`#${id}`}>{repeated}</textPath>
                </text>
            </svg>
        </motion.div>
    );
}

type ArcBadgeProps = {
    text: string;
    width?: number;
    color?: string;
    className?: string;
    fontSize?: number;
};

/** Text following a downward "smile" arc, static — the intro-block-style badge. */
export function ArcBadge({ text, width = 260, color = 'currentColor', className = '', fontSize = 16 }: ArcBadgeProps) {
    const id = useId();
    const height = width * 0.42;

    return (
        <div className={className} style={{ width, height }}>
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                <path id={id} d={`M 4,4 A ${width / 2 - 4},${height - 4} 0 0,0 ${width - 4},4`} fill="none" />
                <text fill={color} fontSize={fontSize} letterSpacing="0.05em" textAnchor="middle" style={{ fontFamily: 'var(--font-playwrite)' }}>
                    <textPath href={`#${id}`} startOffset="50%">{text}</textPath>
                </text>
            </svg>
        </div>
    );
}
