'use client';
import { useState } from 'react';
import { menuByTab, type MenuTab } from '@/data/menu';

const ACTS = ['I', 'II', 'III', 'IV', 'V'];

const TABS: { id: MenuTab; label: string }[] = [
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
];

type PlaybillProps = {
    className?: string;
    scrollable?: boolean;
    showHeader?: boolean;
    columns?: 1 | 2 | 3;
};

const COLUMN_CLASS: Record<1 | 2 | 3, string> = {
    1: 'flex flex-col gap-10',
    2: 'md:columns-2 md:gap-x-12 [&>*]:break-inside-avoid [&>*]:mb-10',
    3: 'md:columns-2 lg:columns-3 md:gap-x-12 [&>*]:break-inside-avoid [&>*]:mb-10',
};

export default function Playbill({ className = '', scrollable = true, showHeader = true, columns = 1 }: PlaybillProps) {
    const [activeTab, setActiveTab] = useState<MenuTab>('food');
    const activeData = menuByTab[activeTab];

    return (
        <div className={`relative bg-neutral rounded-[20px] border-sticker flex flex-col w-full overflow-hidden ${className}`}>
            {/* Paper texture: a faint warm tint, not a flat color fill */}
            <div className="absolute inset-0 bg-gradient-to-b from-caramel/25 via-transparent to-transparent pointer-events-none" />

            {showHeader && (
                <div className="relative z-10 flex flex-col items-center pt-8 md:pt-10 px-6 md:px-10">
                    <span className="font-inter text-[10px] md:text-xs uppercase tracking-[0.5em] text-maroon/50 mb-2">O Kia Coffee presents</span>
                    <h2 className="font-okia text-4xl md:text-5xl text-maroon text-center uppercase tracking-widest mb-6">
                        The Menu
                    </h2>
                </div>
            )}

            <div className="relative z-10 flex justify-center gap-6 md:gap-10 mb-6 mt-8 font-okia tracking-widest text-lg md:text-xl text-maroon">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-1.5 transition-all uppercase ${activeTab === tab.id ? 'border-b-2 border-pink opacity-100' : 'border-b-2 border-transparent opacity-40 hover:opacity-70'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={`relative z-10 w-full px-6 md:px-12 pb-10 ${COLUMN_CLASS[columns]} ${scrollable ? 'flex-1 overflow-y-auto no-scrollbar min-h-[300px]' : ''}`}>
                {activeData.map((section, sectionIdx) => (
                    <div key={section.title ?? sectionIdx} className="w-full">
                        {section.title && (
                            <div className="flex items-baseline gap-3 mb-5">
                                <span className="font-playwrite italic text-pink text-lg md:text-xl shrink-0">
                                    Act {ACTS[sectionIdx % ACTS.length]}
                                </span>
                                <span className="h-px flex-1 bg-maroon/15" />
                                <h3 className="font-okia text-lg md:text-xl text-maroon uppercase tracking-widest text-right">
                                    {section.title}
                                </h3>
                            </div>
                        )}
                        <ul className="flex flex-col gap-5">
                            {section.items.map((item) => (
                                <li key={item.name}>
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-host font-[800] text-base md:text-lg text-maroon uppercase tracking-wide shrink-0">
                                            {item.name}
                                        </span>
                                        <span className="flex-1 border-b border-dotted border-maroon/30 translate-y-[-3px]" />
                                        {item.price && (
                                            <span className="font-inter font-bold text-maroon tracking-widest shrink-0 text-sm md:text-base">
                                                KSH {item.price}
                                            </span>
                                        )}
                                    </div>
                                    {item.description && (
                                        <span className="font-playwrite italic text-maroon/60 text-sm md:text-base block mt-1">
                                            {item.description}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
