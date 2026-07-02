import FoodMenuBoard from '@/components/menu/FoodMenuBoard';
import DrinkMenuBoard from '@/components/menu/DrinkMenuBoard';

export default function MenuPage() {
    return (
        <main className="w-full">
            <FoodMenuBoard />
            <DrinkMenuBoard />
        </main>
    );
}
