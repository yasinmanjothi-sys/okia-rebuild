'use client';
import { useState } from 'react';
import Image from 'next/image';

type PhotoStackProps = {
    images: string[];
    className?: string;
};

const OFFSETS = [
    { rotate: 0, x: 0, y: 0 },
    { rotate: -6, x: 18, y: 14 },
    { rotate: 5, x: -14, y: 26 },
];

export default function PhotoStack({ images, className = '' }: PhotoStackProps) {
    const [order, setOrder] = useState(() => images.map((_, i) => i));

    const cycle = (dir: 1 | -1) => {
        setOrder((prev) => {
            const next = [...prev];
            if (dir === 1) next.push(next.shift()!);
            else next.unshift(next.pop()!);
            return next;
        });
    };

    return (
        <div className={`relative w-full aspect-[4/5] ${className}`}>
            {order.map((imgIdx, pos) => {
                const offset = OFFSETS[pos] ?? OFFSETS[OFFSETS.length - 1];
                return (
                    <div
                        key={imgIdx}
                        className="absolute inset-0 rounded-[24px] overflow-hidden border-sticker shadow-xl transition-transform duration-500 ease-out"
                        style={{
                            zIndex: order.length - pos,
                            transform: `rotate(${offset.rotate}deg) translate(${offset.x}px, ${offset.y}px)`,
                        }}
                    >
                        <Image src={images[imgIdx]} alt="" fill className="object-cover" />
                    </div>
                );
            })}

            {images.length > 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    <button
                        onClick={() => cycle(-1)}
                        aria-label="Previous photo"
                        className="w-10 h-10 rounded-full border border-maroon text-maroon bg-neutral flex items-center justify-center hover:bg-maroon hover:text-neutral transition-colors"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={() => cycle(1)}
                        aria-label="Next photo"
                        className="w-10 h-10 rounded-full border border-maroon text-maroon bg-neutral flex items-center justify-center hover:bg-maroon hover:text-neutral transition-colors"
                    >
                        &rarr;
                    </button>
                </div>
            )}
        </div>
    );
}
