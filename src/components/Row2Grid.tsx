'use client';
import FoodCarousel from './FoodCarousel';
import MenuCenterBlock from './MenuCenterBlock';
import DrinksCarousel from './DrinksCarousel';

export default function Row2Grid() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-2 min-h-[90vh]">
            {/* Left Column: Food Carousel */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                <FoodCarousel />
                
                {/* Bottom spacer block for visual balance similar to Poppi's structure */}
                <div className="flex-[0.5] bg-[#6E0D31] rounded-[32px] p-8 flex flex-col justify-center items-center text-[#FDFDFD] relative overflow-hidden group">
                    <h3 className="font-okia text-2xl tracking-widest text-[#9FCC45]">WHAT PEOPLE THINK</h3>
                    <p className="font-playwrite italic opacity-80 mt-4 text-center text-sm md:text-base pr-4">"The Bánh Mì here is an absolute sensory overload in the best way possible."</p>
                </div>
            </div>

            {/* Center Column: Tall Menu Block */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                <MenuCenterBlock />
            </div>

            {/* Right Column: Drinks Carousel */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                <DrinksCarousel />
                
                {/* Bottom decorative blocks */}
                <div className="flex-[0.5] grid grid-cols-2 gap-2">
                     <div className="bg-[#9FCC45] rounded-[32px] flex items-center justify-center p-4">
                        <span className="font-okia text-3xl text-[#6E0D31] drop-shadow-md">ÔK!</span>
                     </div>
                     <div className="bg-[#E84596] rounded-[32px] flex items-center justify-center p-4">
                        <span className="font-okia text-3xl text-[#FDFDFD] drop-shadow-md">;)</span>
                     </div>
                </div>
            </div>
        </div>
    );
}
