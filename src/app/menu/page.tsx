'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

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

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'desserts'>('food');

    let activeData = foodData;
    if (activeTab === 'drinks') activeData = drinksData;
    if (activeTab === 'desserts') activeData = dessertsData;

    return (
        <main className="w-full min-h-screen bg-neutral p-2 flex flex-col gap-2 overflow-x-hidden relative">
            
            {/* Navbar container */}
            <div className="w-full flex justify-center sticky top-0 z-[90] pointer-events-none">
                <div className="w-full max-w-full px-0 pointer-events-auto">
                    <Navbar />
                </div>
            </div>

            <div className="flex-1 bg-gradient-to-b from-[#FFD695] to-[#E84596] rounded-[32px] p-8 md:p-16 flex flex-col items-center overflow-hidden w-full relative group shadow-inner border-sticker min-h-[85vh]">
                {/* Halftone Street Culture CSS Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#6E0D31_2px,_transparent_2.5px)] bg-[size:12px_12px] opacity-10 pointer-events-none mix-blend-multiply z-0" />
                
                <h2 className="font-okia text-6xl md:text-8xl lg:text-9xl text-[#FDFDFD] text-center drop-shadow-md mb-8 uppercase tracking-wider z-10 mt-12">
                    Our Menu
                </h2>
                
                <div className="flex justify-center flex-wrap gap-6 md:gap-12 mb-12 font-okia tracking-widest text-2xl lg:text-4xl text-[#6E0D31] z-10 w-full">
                    <button onClick={() => setActiveTab('food')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='food'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>FOOD</button>
                    <button onClick={() => setActiveTab('drinks')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='drinks'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>DRINKS</button>
                    <button onClick={() => setActiveTab('desserts')} className={`hover:-translate-y-1 transition-all pb-2 ${activeTab==='desserts'?'border-b-4 border-[#6E0D31] opacity-100':'opacity-50'}`}>DESSERTS</button>
                </div>
                
                <div className="flex-1 w-full max-w-5xl flex flex-col gap-8 z-10 px-2 pb-20">
                    {activeData.map((section, idx) => (
                        <div key={idx} className="w-full">
                            {section.title && <h3 className="font-okia text-3xl lg:text-4xl text-[#6E0D31] mb-8 uppercase tracking-widest border-b-[4px] border-[#6E0D31]/20 pb-2">{section.title}</h3>}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="bg-[#FDFDFD] rounded-[24px] p-6 border-sticker flex justify-between items-center hover:bg-neutral transition-all shadow-sm cursor-pointer hover:scale-105 group">
                                        <div className="flex flex-col pr-4">
                                            <span className="font-host font-[800] text-2xl md:text-3xl text-[#6E0D31] uppercase tracking-wide mb-1 block group-hover:text-[#E84596] transition-colors">{item.name}</span>
                                            {item.description && <span className="font-playwrite italic text-base md:text-lg text-[#6E0D31]/80">{item.description}</span>}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-host font-black text-[#6E0D31] tracking-widest whitespace-nowrap text-xl">KSH</span>
                                            <span className="font-host font-black text-[#6E0D31] tracking-widest whitespace-nowrap text-2xl">{item.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
