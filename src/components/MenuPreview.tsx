import Link from 'next/link';
import Image from 'next/image';
import { foodBoard } from '@/data/menuBoards';
import MaskAccent from '@/components/menu/MaskAccent';
import OutlineHeadline from '@/components/menu/OutlineHeadline';
import MenuBoardFrame from '@/components/menu/MenuBoardFrame';
import BoardRows from '@/components/menu/BoardRows';

const MAROON = '#6E0D31';
const CARAMEL = '#FFD695';

export default function MenuPreview() {
    const section = foodBoard[0][0];

    return (
        <section data-nav-theme="dark" className="relative w-full overflow-hidden bg-pink">
            <MenuBoardFrame color={MAROON}>
                <div className="relative max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col items-center text-center">
                    <MaskAccent mask="anger" size={80} className="absolute left-2 md:left-6 top-6 hidden sm:block" />
                    <MaskAccent mask="surprise" size={70} className="absolute right-2 md:right-6 bottom-10 hidden sm:block" />

                    <div className="relative w-14 h-14 mb-4">
                        <Image src="/Main Masks /Hy (joy) svg.svg" alt="Hỷ — the Joy mask" fill className="object-contain" />
                    </div>
                    <span className="uppercase tracking-[0.3em] text-xs text-neutral/70 font-host mb-3">From the menu</span>
                    <OutlineHeadline color={CARAMEL} className="text-[3.5rem] md:text-[5.5rem] mb-10">
                        Food
                    </OutlineHeadline>

                    <div className="w-full max-w-md text-left">
                        <BoardRows rows={[[section]]} textClass="text-neutral" />
                    </div>

                    <Link
                        href="/menu"
                        className="mt-12 rounded-full border border-neutral px-8 py-3 font-host font-bold text-xs uppercase tracking-[0.15em] text-neutral hover:bg-neutral hover:text-maroon transition-colors"
                    >
                        View Full Menu
                    </Link>
                </div>
            </MenuBoardFrame>
        </section>
    );
}
