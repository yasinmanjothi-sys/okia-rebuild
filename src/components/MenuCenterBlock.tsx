'use client';
import { useState } from 'react';

type MenuItem = { name: string; price?: string; description?: string; };
type MenuSection = { title?: string; items: MenuItem[]; };

const drinksData: MenuSection[] = [
    {
        title: 'Classic Coffees',
        items: [
            { name: 'Ca Phe Sua Da', description: 'Vietnamese Iced Coffee with Condensed Milk', price: '450' },
            { name: 'Ca Phe Den', description: 'Traditional Black Coffee', price: '350' },
            { name: 'Ca Phe Trung', description: 'Hanoi-style Egg Coffee', price: '500' },
        ],
    },
    {
        title: 'Specialties',
        items: [
            { name: 'Coconut Coffee Slush', description: 'Ca Phe Cot Dua', price: '600' },
            { name: 'Salted Cream Coffee', description: 'Ca Phe Kem Muoi', price: '550' },
        ],
    }
];

const foodData: MenuSection[] = [
    {
        title: 'Banh Mi (Baguettes)',
        items: [
            { name: 'Classic Cold Cut', description: 'Pate, cha lua, jambon, pickled daikon.', price: '850' },
            { name: 'Grilled Pork', description: 'Lemongrass marinated pork with fresh herbs.', price: '900' },
            { name: 'Lemongrass Chicken', description: 'Char-grilled chicken thigh, spicy mayo.', price: '900' },
            { name: 'Crispy Tofu (V)', description: 'Fried lemongrass tofu, mushroom pate.', price: '800' },
        ],
    },
    {
        title: 'Bao (Steamed Buns)',
        items: [
            { name: 'BBQ Pork Bao', description: 'Slow-roasted pork with cucumber.', price: '750' },
            { name: 'Crispy Chicken Bao', description: 'Fried chicken, sriracha mayo.', price: '750' },
        ]
    }
];

const dessertsData: MenuSection[] = [
    {
        title: 'Sweets',
        items: [
            { name: 'Flan (Banh Flan)', description: 'Caramel custard with coffee icing.', price: '350' },
            { name: 'Pandan Waffle', description: 'Crispy green waffle with coconut.', price: '400' },
            { name: 'Che Ba Mau', description: 'Three-color dessert with coconut milk.', price: '450' },
        ],
    }
];

export default function MenuCenterBlock() {
    const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'desserts'>('food');

    let activeData = foodData;
    if (activeTab === 'drinks') activeData = drinksData;
    if (activeTab === 'desserts') activeData = dessertsData;

    return (
        <div className="flex-1 bg-gradient-to-b from-[#FFD695] to-[#E84596] rounded-[32px] p-6 md:p-10 lg:p-6 flex flex-col items-center overflow-hidden w-full relative group shadow-inner">
            {/* Halftone Street Culture CSS Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#6E0D31_2px,_transparent_2.5px)] bg-[size:12px_12px] opacity-10 pointer-events-none mix-blend-multiply z-0" />
            
            <h2 className="font-okia text-5xl md:text-6xl lg:text-5xl text-[#FDFDFD] text-center drop-shadow-md mb-6 uppercase tracking-wider z-10 mt-8">
                Menu
            </h2>
            
            <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-8 font-okia tracking-widest text-xl lg:text-xl text-[#6E0D31] z-10 w-full">
                <button onClick={() => setActiveTab('food')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='food'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>FOOD</button>
                <button onClick={() => setActiveTab('drinks')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='drinks'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>DRINKS</button>
                <button onClick={() => setActiveTab('desserts')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='desserts'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>DESSERTS</button>
            </div>
            
            {/* Scrollable list container mapping to Poppi's massive arch style but acting as a content list */}
            <div className="flex-1 w-full flex flex-col gap-6 overflow-y-auto overflow-x-hidden no-scrollbar pb-10 z-10 px-2 min-h-[400px] lg:min-h-0">
                {activeData.map((section, idx) => (
                    <div key={idx} className="w-full mb-4">
                        {section.title && <h3 className="font-okia text-2xl lg:text-3xl text-[#6E0D31] mb-6 uppercase tracking-widest border-b-[3px] border-[#6E0D31]/20 pb-2">{section.title}</h3>}
                        <ul className="flex flex-col gap-4">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="bg-[#FDFDFD] rounded-2xl p-5 border-sticker flex justify-between items-center group-menu hover:bg-neutral transition-colors shadow-sm cursor-pointer hover:scale-[1.02]">
                                    <div className="flex flex-col pr-4">
                                        <span className="font-host font-[800] text-xl md:text-2xl text-[#6E0D31] uppercase tracking-wide mb-1 block group-hover:text-[#E84596] transition-colors">{item.name}</span>
                                        {item.description && <span className="font-playwrite italic text-sm md:text-base text-[#6E0D31]/80">{item.description}</span>}
                                    </div>
                                    <span className="font-inter font-bold text-[#6E0D31] tracking-widest mx-2 whitespace-nowrap text-lg">KSH {item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
