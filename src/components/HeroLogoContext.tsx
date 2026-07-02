'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const HeroLogoContext = createContext(true);

export function useHeroLogoCollapsed() {
    return useContext(HeroLogoContext);
}

/**
 * Tracks whether the hero's big centered logo should be collapsed back into
 * its normal small navbar spot. Single source of truth shared by both
 * `HeroLogo` (renders the big version) and `Navbar` (renders the small one)
 * via `layoutId` — they must flip in the same React commit for framer-motion's
 * shared-layout transition to animate between them instead of just swapping.
 */
export function HeroLogoProvider({ children }: { children: ReactNode }) {
    const [collapsed, setCollapsed] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const root = document.getElementById('scroll-root');
        if (!root) return;

        const handler = () => {
            const hero = document.getElementById('hero-section');
            if (!hero) {
                setCollapsed(true);
                return;
            }
            const rect = hero.getBoundingClientRect();
            const progress = rect.height > 0 ? Math.min(1, Math.max(0, -rect.top / rect.height)) : 1;
            setCollapsed(progress > 0.5);
        };

        handler();
        root.addEventListener('scroll', handler, { passive: true });
        window.addEventListener('resize', handler);
        return () => {
            root.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [pathname]);

    return <HeroLogoContext.Provider value={collapsed}>{children}</HeroLogoContext.Provider>;
}
