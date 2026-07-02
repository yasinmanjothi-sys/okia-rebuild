import Link from 'next/link';
import { ArcBadge } from '@/components/RotatingBadge';
import Divider from '@/components/Divider';
import MaskAccent from '@/components/menu/MaskAccent';
import OutlineHeadline from '@/components/menu/OutlineHeadline';

export default function IntroBlock() {
    return (
        <section data-nav-theme="light" className="relative w-full bg-neutral flex flex-col items-center pt-20 md:pt-28 pb-16 px-6 overflow-hidden">
            {/* Subtle poster-word flourish behind the heading, echoing the menu boards' outline type */}
            <OutlineHeadline
                color="rgba(110,13,49,0.1)"
                decorative
                className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-[5rem] md:text-[9rem] whitespace-nowrap pointer-events-none select-none"
            >
                Okia
            </OutlineHeadline>

            <div className="relative z-10 flex flex-col items-center">
                <ArcBadge text="Hello & Ô Kìa" width={240} color="#6E0D31" className="mb-4" />

                <div className="relative">
                    <MaskAccent mask="love" size={64} className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block" />
                    <h2 className="font-okia text-2xl md:text-4xl lg:text-5xl !text-maroon uppercase tracking-wide text-center max-w-4xl leading-snug mb-10">
                        Okia is for slow mornings, loud laughs, banh mi on the go, &amp; sips worth the encore.
                    </h2>
                    <MaskAccent mask="sadness" size={58} className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block" />
                </div>

                <Link
                    href="/contact"
                    className="rounded-full border border-maroon px-8 py-3 font-host font-bold text-xs uppercase tracking-[0.15em] text-maroon hover:bg-maroon hover:text-neutral transition-colors mb-16"
                >
                    Book a Table
                </Link>
            </div>

            <Divider variant="fan" color="#6E0D31" className="relative z-10 max-w-6xl" />
        </section>
    );
}
