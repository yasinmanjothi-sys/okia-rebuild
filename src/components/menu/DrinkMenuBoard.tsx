import MenuBoardFrame from '@/components/menu/MenuBoardFrame';
import OutlineHeadline from '@/components/menu/OutlineHeadline';
import MaskAccent from '@/components/menu/MaskAccent';
import BoardRows from '@/components/menu/BoardRows';
import { drinkBoard } from '@/data/menuBoards';

const MAROON = '#6E0D31';
const PINK = '#E84596';

export default function DrinkMenuBoard() {
    return (
        <section data-nav-theme="light" className="relative w-full overflow-hidden bg-green">
            <MenuBoardFrame color={MAROON}>
                {/* Accents live in the outer margin outside the max-w-5xl content, so they never
                    collide with menu text regardless of how the copy wraps or reflows. Six total,
                    matching the reference photo's count. */}
                <div className="relative">
                    <MaskAccent mask="sadness" size={100} className="absolute left-8 top-[35%] hidden xl:block" />
                    <MaskAccent mask="surprise" size={70} className="absolute left-8 top-[68%] hidden xl:block" />
                    <MaskAccent mask="anger" size={80} className="absolute right-8 top-[52%] hidden xl:block" />

                    <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-20">
                        {/* Headline */}
                        <div className="relative flex justify-center mb-14 md:mb-20">
                            <OutlineHeadline color={PINK} className="text-[4.5rem] leading-[0.85] md:text-[8rem]">
                                Drink
                            </OutlineHeadline>
                            <MaskAccent mask="anger" size={60} className="absolute -left-10 top-1/2 -translate-y-1/2 hidden sm:block" />
                            <MaskAccent mask="joy" size={64} className="absolute -right-4 -top-10 hidden sm:block" />
                            <MaskAccent mask="love" size={64} className="absolute right-24 -bottom-10 hidden sm:block" />
                        </div>

                        <BoardRows rows={drinkBoard} textClass="text-maroon" />
                    </div>
                </div>
            </MenuBoardFrame>
        </section>
    );
}
