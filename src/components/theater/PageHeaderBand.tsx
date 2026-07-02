import Image from 'next/image';
import { RotatingBadge } from '@/components/RotatingBadge';
import MaskAccent from '@/components/menu/MaskAccent';
import MenuBoardFrame from '@/components/menu/MenuBoardFrame';

const CARAMEL = '#FFD695';

type PageHeaderBandProps = {
    title: string;
    badgeText: string;
    maskSrc: string;
    maskAlt: string;
};

export default function PageHeaderBand({ title, badgeText, maskSrc, maskAlt }: PageHeaderBandProps) {
    return (
        <section data-nav-theme="dark" className="stage-surface relative w-full overflow-hidden">
            <MenuBoardFrame color={CARAMEL}>
                <div className="relative flex flex-col items-center justify-center gap-6 py-20 md:py-28 px-6 text-center">
                    <MaskAccent mask="joy" size={80} className="absolute left-6 md:left-16 top-4 hidden sm:block opacity-80" />
                    <MaskAccent mask="love" size={70} className="absolute right-6 md:right-16 bottom-4 hidden sm:block opacity-80" />

                    <div className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
                        <RotatingBadge
                            text={badgeText}
                            size={220}
                            color="#E84596"
                            fontSize={10}
                            className="absolute inset-0 m-auto"
                            containerClassName="w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
                        />
                        <div className="relative w-[55%] aspect-square drop-shadow-xl">
                            <Image src={maskSrc} alt={maskAlt} fill className="object-contain" />
                        </div>
                    </div>
                    <h1 className="relative font-okia text-5xl md:text-7xl lg:text-8xl !text-neutral uppercase tracking-widest">
                        {title}
                    </h1>
                </div>
            </MenuBoardFrame>
        </section>
    );
}
