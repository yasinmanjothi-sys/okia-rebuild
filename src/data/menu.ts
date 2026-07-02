export type MenuItem = {
    name: string;
    price?: string;
    description?: string;
};

export type MenuSection = {
    title?: string;
    items: MenuItem[];
};

export const drinksData: MenuSection[] = [
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
    },
];

export const dessertsData: MenuSection[] = [
    {
        title: 'Sweets',
        items: [
            { name: 'Flan (Bánh Flan)', description: 'Caramel custard with a touch of coffee icing.', price: '350' },
            { name: 'Pandan Waffle', description: 'Crispy green waffle imbued with coconut and pandan extract.', price: '400' },
            { name: 'Chè Ba Màu', description: 'Three-color dessert with beans, jelly, and coconut milk.', price: '450' },
            { name: 'Cassava Cake', description: 'Bánh Khoai Mì Nướng', price: '350' },
        ],
    },
];

export const foodData: MenuSection[] = [
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
        ],
    },
    {
        title: 'Savory Bites',
        items: [
            { name: 'Patê Sô', description: 'Vietnamese inspired flaky meat pie with pork/chicken filling.', price: '450' },
            { name: 'Summer Rolls', description: 'Gỏi Cuốn: Prawn and pork with peanut dipping sauce (2pcs).', price: '600' },
            { name: 'Fried Spring Rolls', description: 'Chả Giò: Crispy fried pork and wood-ear mushroom rolls.', price: '600' },
        ],
    },
];

export type MenuTab = 'food' | 'drinks' | 'desserts';

export const menuByTab: Record<MenuTab, MenuSection[]> = {
    food: foodData,
    drinks: drinksData,
    desserts: dessertsData,
};
