'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeroLogoCollapsed } from '@/components/HeroLogoContext';
import { FanBottom } from '@/components/menu/MenuBoardFrame';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const navRef = useRef<HTMLElement>(null);
    const logoCollapsed = useHeroLogoCollapsed();

    const toggleMenu = () => setIsMenuOpen((v) => !v);

    const menuLinks = [
        { name: 'Menu', href: '/menu' },
        { name: 'The Story', href: '/story' },
        { name: 'Contact', href: '/contact' },
    ];

    // Determine nav color by asking the DOM what's directly behind the nav bar right now,
    // rather than hardcoding per-page section boundaries.
    useEffect(() => {
        const root = document.getElementById('scroll-root');
        if (!root) return;

        const update = () => {
            const rect = navRef.current?.getBoundingClientRect();
            const y = (rect?.bottom ?? 60) + 6;
            const el = document.elementFromPoint(window.innerWidth / 2, y);
            const themed = el?.closest('[data-nav-theme]') as HTMLElement | null;
            setTheme(themed?.dataset.navTheme === 'light' ? 'light' : 'dark');
        };

        update();
        root.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            root.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const isLight = theme === 'light';
    const fg = isLight ? 'text-maroon' : 'text-neutral';

    return (
        <nav
            ref={navRef}
            className={`w-full px-3 md:px-5 py-5 flex justify-between items-center transition-colors duration-300 ${fg}`}
        >
            {/* Left: MENU trigger, on every breakpoint */}
            <div className="flex-1 flex items-center">
                <button
                    onClick={toggleMenu}
                    className="font-host font-bold text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                >
                    Menu
                </button>
            </div>

            {/* Center Logo — hidden while the hero's big version is showing, fades in once it disappears */}
            <div className="flex-1 flex justify-center">
                <AnimatePresence>
                    {logoCollapsed && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <Link href="/" className="hover:scale-105 transition-transform block">
                                <div className={`relative w-32 md:w-44 h-10 md:h-14 ${isLight ? '' : 'invert brightness-0'}`}>
                                    <Image src="/Nav bar logo.svg" alt="O KIA Logo" fill className="object-contain" priority />
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Right: Book a table */}
            <div className="flex-1 flex justify-end">
                <Link
                    href="/contact"
                    className={`hidden sm:inline-block font-host font-bold text-xs md:text-sm tracking-[0.15em] uppercase border rounded-full px-4 md:px-5 py-2 hover:scale-105 transition-transform ${isLight ? 'border-maroon' : 'border-neutral'}`}
                >
                    Book a Table
                </Link>
                <button onClick={toggleMenu} className="sm:hidden font-host font-bold text-xs tracking-[0.15em] uppercase">
                    Book
                </button>
            </div>

            {/* Menu Drawer Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 z-[95] backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#6E0D31] z-[100] p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <div className="relative w-32 h-10">
                                    <Image src="/Nav bar logo.svg" alt="O KIA Logo" fill className="object-contain brightness-0 invert" />
                                </div>
                                <button onClick={toggleMenu} className="text-[#FDFDFD]" aria-label="Close menu">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-8">
                                <Link href="/" onClick={toggleMenu} className="font-okia text-3xl text-[#FDFDFD] hover:text-[#9FCC45] transition-colors uppercase tracking-widest">
                                    Home
                                </Link>
                                {menuLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="font-okia text-3xl text-[#FDFDFD] hover:text-[#9FCC45] transition-colors uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto pt-6">
                                <FanBottom color="#E84596" flip className="mb-4 opacity-70" />
                                <p className="font-host text-xs text-[#FDFDFD]/60 uppercase tracking-widest mb-4">Saigon Street Culture</p>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 relative">
                                        <Image src="/Main Masks /Ai (love).svg" alt="Mask" fill className="object-contain" />
                                    </div>
                                    <div className="w-10 h-10 relative">
                                        <Image src="/Main Masks /Hy (joy) svg.svg" alt="Mask" fill className="object-contain" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
