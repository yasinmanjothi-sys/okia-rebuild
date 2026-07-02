export type BoardItem = {
    code?: string;
    name: string;
    note?: string;
    price: string;
};

export type BoardSection = {
    title: string;
    note?: string;
    items: BoardItem[];
};

// Each row is 1 or 2 sections rendered side by side, matching the printed board's own grid.
export type BoardRow = BoardSection[];

export const foodBoard: BoardRow[] = [
    [
        {
            title: 'Okia Healthy Fresh Rolls',
            note: '(2 pieces per portion)',
            items: [
                { code: '4.1.', name: 'Chicken', price: '600' },
                { code: '4.2.', name: 'Beef', price: '600' },
                { code: '4.3.', name: 'Vegetarian', price: '550' },
                { code: '4.4.', name: 'Salmon', price: '950' },
            ],
        },
        {
            title: 'Banh Mi on Plate',
            note: '(Deconstructed Banh Mi Sandwich – on a Plate)',
            items: [
                { code: '4.9.', name: 'Chicken & Mushroom', price: '1290' },
                { code: '4.10.', name: 'Beef & Potato', price: '1290' },
                { code: '4.11.', name: 'Pork Meatballs & Tomato Sauce', price: '1290' },
            ],
        },
    ],
    [
        {
            title: 'Banh Mi on Hand',
            note: '(The Legendary Banh Mi sandwich)',
            items: [
                { code: '4.5.', name: 'Chicken', price: '990' },
                { code: '4.6.', name: 'Beef', price: '990' },
                { code: '4.7.', name: 'Pork Meatballs', price: '990' },
                { code: '4.8.', name: 'Salmon', price: '1790' },
            ],
        },
        {
            title: 'Extras',
            items: [
                { name: 'Meat', price: '400' },
                { name: 'Bread', price: '150' },
                { name: 'Salmon', price: '800' },
                { name: 'Omelette', price: '150' },
            ],
        },
    ],
];

export const drinkBoard: BoardRow[] = [
    [
        {
            title: 'Traditional Vietnamese Coffee',
            items: [
                { code: '1.1.', name: 'Black', price: 'Hot 300 / Ice 350' },
                { code: '1.2.', name: 'Brown', note: '(with condensed milk)', price: 'Hot 400 / Ice 450' },
                { code: '1.3.', name: 'White', note: '(with condensed milk and milk)', price: 'Hot 400 / Ice 450' },
            ],
        },
        {
            title: 'Okia Specialty Coffee',
            items: [
                { code: '3.1.', name: 'Salt Coffee', price: 'Hot 400 / Iced 500' },
                { code: '3.2.', name: 'Salty Caramel Coffee', price: 'Hot 450 / Iced 550' },
                { code: '3.3.', name: 'Creamy Coconut Coffee', price: 'Hot 450 / Iced 550' },
                { code: '3.4.', name: 'Peanut Butter Coffee', price: 'Hot 500 / Iced 600' },
            ],
        },
    ],
    [
        {
            title: 'Vietnamese Fusion Coffee',
            items: [
                { code: '2.1.', name: 'Mocha', price: 'Hot 500 / Iced 600' },
                { code: '2.2.', name: 'Cinnamon Mocha Latte', price: 'Hot 500 / Iced 600' },
                { code: '2.3.', name: 'Caramel Almond Latte', price: 'Hot 500 / Iced 600' },
                { code: '2.4.', name: 'Iced Orange Honey Americano', price: '550' },
                { code: '2.5.', name: 'Iced Lemonade Americano', price: '550' },
            ],
        },
        {
            title: 'Oolong Tea Series',
            items: [
                { code: '4.1.', name: 'Oolong Tea', price: 'Hot 300 / Iced 350' },
                { code: '4.2.', name: 'Oolong Milk Tea', price: 'Hot 500 / Iced 600' },
                { code: '4.3.', name: 'Coconut Milk Tea', price: 'Iced 650' },
                { code: '4.4.', name: 'Mango Tangerine Iced Tea', price: '650' },
                { code: '4.5.', name: 'Passion Pineapple Iced Tea', price: '650' },
            ],
        },
    ],
    [
        {
            title: 'Alterations',
            items: [
                { name: 'Plant based', note: '(Soy, Almond, Oat)', price: '100' },
                { name: 'Honey', price: '50' },
            ],
        },
        {
            title: 'Matcha',
            items: [
                { code: '5.1.', name: 'Iced Matcha Latte', price: '700' },
                { code: '5.2.', name: 'Dirty Matcha Latte', note: '(Matcha + Coffee)', price: '750' },
            ],
        },
    ],
    [
        {
            title: 'Cake',
            note: '(Perfect pairing with your coffee)',
            items: [
                { name: 'Pandan Pistachio', price: '450' },
                { name: 'Coffee Muffin', price: '450' },
            ],
        },
    ],
];
