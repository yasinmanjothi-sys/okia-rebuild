import EdgeMaskField from '@/components/EdgeMaskField';
import HeroLogo from '@/components/HeroLogo';

export default function HeroSection() {
    return (
        <section
            id="hero-section"
            data-nav-theme="dark"
            className="stage-surface relative w-full min-h-[85vh] overflow-hidden px-6"
        >
            {/* Five masks popping in from every edge — bottom, top, left, right — sinking back and reappearing elsewhere on loop */}
            <EdgeMaskField />

            {/* Logo and scroll cue flow together so the text always sits a fixed gap below the
                logo's actual rendered edge, instead of two independently-percentaged elements
                that could collide on shorter viewports. Centered vertically on mobile; pinned
                near the top on desktop. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-start pt-0 md:pt-[6%] gap-6 md:gap-8 px-6 pointer-events-none z-10">
                <HeroLogo />
                <p className="font-playwrite text-lg md:text-xl text-neutral/90 text-center">
                    Keep scrolling, the curtain&apos;s about to rise.
                </p>
            </div>
        </section>
    );
}
