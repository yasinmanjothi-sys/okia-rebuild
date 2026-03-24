'use client';
import { useState } from 'react';

type MenuItem = {
    name: string;
    price?: string;
    description?: string;
};

type MenuSection = {
    title?: string;
    items: MenuItem[];
};

const drinksData: MenuSection[] = [
    {
        title: 'Classic Coffees',
        items: [
            { name: 'Cà Phê Sữa Đá', description: 'Vietnamese Iced Coffee with Condensed Milk', price: '450' },
            { name: 'Cà Phê Đen', description: 'Traditional Black Coffee (Hot or Iced)', price: '350' },
            { name: 'Cà Phê Trứng', description: 'Hanoi-style Egg Coffee', price: '500' },
            { name: 'Bạc Xỉu', description: 'White Coffee - Extra Condensed Milk', price: '450' },
        ],
    },
    {
        title: 'Specialties',
        items: [
            { name: 'Coconut Coffee Slush', description: 'Cà Phê Cốt Dừa', price: '600' },
            { name: 'Salted Cream Coffee', description: 'Cà Phê Kem Muối', price: '550' },
            { name: 'Pandan Latte', description: 'Espresso with Pandan Extract & Milk', price: '550' },
            { name: 'Matcha Espresso Fusion', price: '600' },
        ],
    },
    {
        title: 'Teas & Refreshments',
        items: [
            { name: 'Trà Đá', description: 'Iced Jasmine Tea (Bottomless)', price: '150' },
            { name: 'Peach & Lemongrass Tea', description: 'Trà Đào Cam Sả', price: '450' },
            { name: 'Kumquat Iced Tea', description: 'Trà Tắc', price: '400' },
            { name: 'Lotus Silk Tea', description: 'Trà Sen', price: '450' },
            { name: 'Fresh Sugarcane Juice', description: 'Nước Mía', price: '350' },
        ],
    }
];

const dessertsData: MenuSection[] = [
    {
        title: 'Sweets',
        items: [
            { name: 'Flan (Bánh Flan)', description: 'Caramel custard with a touch of coffee icing.', price: '350' },
            { name: 'Pandan Waffle', description: 'Crispy green waffle imbued with coconut and pandan extract.', price: '400' },
            { name: 'Chè Ba Màu', description: 'Three-color dessert with beans, jelly, and coconut milk.', price: '450' },
            { name: 'Cassava Cake', description: 'Bánh Khoai Mì Nướng', price: '350' },
        ],
    }
];

const foodData: MenuSection[] = [
    {
        title: 'Bánh Mì (Baguettes)',
        items: [
            { name: 'Classic Cold Cut', description: 'Bánh Mì Thịt Nguội: Pâté, chả lụa, jambon, pickled daikon.', price: '850' },
            { name: 'Grilled Pork', description: 'Bánh Mì Thịt Nướng: Lemongrass marinated pork with fresh herbs.', price: '900' },
            { name: 'Lemongrass Chicken', description: 'Bánh Mì Gà Nướng: Char-grilled chicken thigh, spicy mayo.', price: '900' },
            { name: 'Crispy Tofu (V)', description: 'Bánh Mì Chay: Fried lemongrass tofu, mushroom pâté, soy-glaze.', price: '800' },
        ],
    },
    {
        title: 'Bảo (Steamed Buns)',
        items: [
            { name: 'BBQ Pork Bao', description: 'Slow-roasted char siu pork with cucumber and hoisin.', price: '750' },
            { name: 'Crispy Chicken Bao', description: 'Fried chicken, sriracha mayo, pickled cabbage.', price: '750' },
            { name: 'Mushroom Tempura Bao (V)', description: 'Oyster mushroom tempura with scallion sauce.', price: '650' },
        ]
    },
    {
        title: 'Savory Bites',
        items: [
            { name: 'Patê Sô', description: 'Vietnamese inspired flaky meat pie with pork/chicken filling.', price: '450' },
            { name: 'Summer Rolls', description: 'Gỏi Cuốn: Prawn and pork with peanut dipping sauce (2pcs).', price: '600' },
            { name: 'Fried Spring Rolls', description: 'Chả Giò: Crispy fried pork and wood-ear mushroom rolls.', price: '600' },
        ]
    }
];

export default function ModularProductGrid() {
    const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'desserts'>('food');

    let activeData = foodData;
    if (activeTab === 'drinks') activeData = drinksData;
    if (activeTab === 'desserts') activeData = dessertsData;

    return (
        <section className="w-full bg-neutral py-24 px-6 md:px-12 relative z-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
                
                {/* Main Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-20 font-okia tracking-widest text-4xl md:text-5xl lg:text-7xl text-pink">
                    <button onClick={() => setActiveTab('food')} className={`transition-opacity hover-pop ${activeTab === 'food' ? 'opacity-100 text-maroon' : 'opacity-40'}`}>FOOD</button>
                    <button onClick={() => setActiveTab('drinks')} className={`transition-opacity hover-pop ${activeTab === 'drinks' ? 'opacity-100 text-maroon' : 'opacity-40'}`}>DRINKS</button>
                    <button onClick={() => setActiveTab('desserts')} className={`transition-opacity hover-pop ${activeTab === 'desserts' ? 'opacity-100 text-maroon' : 'opacity-40'}`}>DESSERTS</button>
                </div>

                {/* Sub-sections layout */}
                <div className="w-full flex flex-col gap-20">
                    {activeData.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="w-full">
                            {section.title && (
                                <h3 className="font-okia text-2xl md:text-4xl text-maroon mb-12 text-center uppercase tracking-widest">{section.title}</h3>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-2">
                                {section.items.map((item, itemIdx) => {
                                    const bgColors = ['bg-pink', 'bg-green', 'bg-caramel'];
                                    const bgColor = bgColors[(sectionIdx + itemIdx) % bgColors.length];
                                    return (
                                        <div key={itemIdx} className={`p-8 md:p-10 rounded-[40px] border-sticker hover-pop flex flex-col justify-between min-h-[300px] shadow-sm ${bgColor} relative overflow-hidden group cursor-pointer`}>
                                            <div className="z-10 text-center flex-1 flex flex-col justify-center">
                                                <h4 className="font-okia text-2xl md:text-3xl tracking-wide leading-tight text-maroon mb-4">{item.name}</h4>
                                                {item.description && (
                                                    <p className="font-playwrite italic text-maroon opacity-80 text-sm md:text-base leading-snug">{item.description}</p>
                                                )}
                                            </div>
                                            {item.price && (
                                                <div className="z-10 mt-6 pt-4 border-t-2 border-maroon/20 text-center group-hover:border-maroon/50 transition-colors">
                                                    <span className="font-okia text-xl text-maroon tracking-widest">KSH {item.price}</span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
