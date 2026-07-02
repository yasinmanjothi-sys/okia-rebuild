import HeroSection from '@/components/HeroSection';
import CurtainReveal from '@/components/CurtainReveal';
import IntroBlock from '@/components/IntroBlock';
import StoryRowGrid from '@/components/StoryRowGrid';
import FoodMenuBoard from '@/components/menu/FoodMenuBoard';
import DrinkMenuBoard from '@/components/menu/DrinkMenuBoard';

export default function Home() {
    return (
        <main className="w-full">
            <HeroSection />
            <CurtainReveal />
            <IntroBlock />
            <StoryRowGrid />
            <FoodMenuBoard />
            <DrinkMenuBoard />
        </main>
    );
}
