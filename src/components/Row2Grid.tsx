'use client';
import Image from 'next/image';
import FoodCarousel from './FoodCarousel';
import MenuCenterBlock from './MenuCenterBlock';
import DrinksCarousel from './DrinksCarousel';

export default function Row2Grid() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-2 min-h-[90vh]">
            {/* Left Column: Food Carousel */}
            <div className="flex flex-col flex-1 gap-2 h-auto lg:h-[90vh]">
                <FoodCarousel />
                
                {/* Image block for visual balance */}
                <div className="flex-[0.5] bg-[#6E0D31] rounded-[32px] relative overflow-hidden group border-sticker">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full scale-110">
                            <Image 
                                src="/half tone street culture/pots and cups.svg" 
                                alt="Vietnamese Pots and Cups" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    </div>
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
