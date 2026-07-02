import Image from 'next/image';
import MenuBoardFrame from '@/components/menu/MenuBoardFrame';
import OutlineHeadline from '@/components/menu/OutlineHeadline';
import MaskAccent from '@/components/menu/MaskAccent';
import BoardRows from '@/components/menu/BoardRows';
import { foodBoard } from '@/data/menuBoards';

const MAROON = '#6E0D31';
const CARAMEL = '#FFD695';

export default function FoodMenuBoard() {
    return (
        <section data-nav-theme="dark" className="relative w-full overflow-hidden bg-pink">
            <MenuBoardFrame color={MAROON}>
                <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-20">
                    {/* Headline */}
                    <div className="relative flex justify-center mb-14 md:mb-20">
                        <OutlineHeadline color={CARAMEL} className="text-[4.5rem] leading-[0.85] md:text-[8rem]">
                            Food
                        </OutlineHeadline>
                        <MaskAccent mask="love" size={64} className="absolute -left-10 top-1/2 -translate-y-1/2 hidden sm:block" />
                        <MaskAccent mask="surprise" size={78} className="absolute -right-4 -top-10 hidden sm:block" />
                        <MaskAccent mask="anger" size={54} className="absolute right-24 -bottom-10 hidden md:block" />
                    </div>

                    {/* Menu grid — two more mask accents, matching the reference photo's count of 5 total */}
                    <div className="relative">
                        <MaskAccent
                            mask="sadness"
                            size={80}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
                        />
                        <MaskAccent mask="joy" size={56} className="absolute left-[38%] top-[78%] hidden lg:block" />
                        <BoardRows rows={foodBoard} textClass="text-neutral" />
                    </div>

                    {/* Footer: logo lockup + brand copy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-24">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-10 h-10 shrink-0">
                                    <Image src="/LOGO_OKIA.svg" alt="O KIA" fill className="object-contain brightness-0" />
                                </div>
                                <span className="font-okia text-2xl md:text-3xl text-maroon">Café & Bites</span>
                            </div>
                            <p className="font-host text-xs md:text-sm text-neutral/85 italic max-w-xs">
                                OKIA! is a Vietnamese exclamation that expresses genuine surprise. The literal translation to
                                English might be &ldquo;OH LOOK!&rdquo;.
                            </p>
                        </div>

                        <div className="font-host text-xs md:text-sm text-neutral/85 leading-relaxed">
                            <p className="mb-4">
                                OKIA Cafe is an invitation and a reminder to share your sense of wonder with humans around you.
                                This is the space of elegance, beauty, and spontaneity, for you who seek magic and joy in your
                                daily lives.
                            </p>
                            <p className="mb-4">
                                On our side, we seek to share Vietnamese refinement with the world and shift culture, one
                                coffee at a time.
                            </p>
                            <p className="font-playwrite italic text-base md:text-lg text-neutral mb-2">Join the movement.</p>
                            <p>Follow the movement on Instagram @okiacafe</p>
                        </div>
                    </div>
                </div>
            </MenuBoardFrame>
        </section>
    );
}
