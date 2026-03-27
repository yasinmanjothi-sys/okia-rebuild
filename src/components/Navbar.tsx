'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuLinks = [
        { name: 'Menu', href: '/menu' },
        { name: 'The Story', href: '/story' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="w-full bg-[#FDFDFD] px-6 py-4 flex justify-between items-center z-[90] rounded-[32px] mb-0 border-sticker sticky top-0 shadow-lg">
            {/* Left Links (Desktop) */}
            <div className="flex-1 hidden md:flex items-center gap-6 font-inter font-bold text-sm tracking-widest uppercase text-[#6E0D31]">
                {menuLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-[#E84596] transition-colors hover:scale-105 active:scale-95 inline-block">
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex-1 md:hidden flex items-center">
                <button 
                    onClick={toggleMenu}
                    className="p-2 text-[#6E0D31] focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
                <Link href="/">
                    <div className="relative w-40 md:w-56 h-12 md:h-16 hover:scale-105 transition-transform">
                        <Image src="/NEW LOGO NAVBAR .svg" alt="O KIA Logo" fill className="object-contain" priority />
                    </div>
                </Link>
            </div>

            {/* Right CTA Space (Empty to maintain centering) */}
            <div className="flex-1 hidden md:flex justify-end">
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 z-[95] md:hidden backdrop-blur-sm"
                        />
                        
                        {/* Slide-out Menu */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#6E0D31] z-[100] md:hidden p-8 flex flex-col border-r-4 border-[#E84596]"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="relative w-32 h-10">
                                    <Image src="/NEW LOGO NAVBAR .svg" alt="O KIA Logo" fill className="object-contain brightness-0 invert" />
                                </div>
                                <button onClick={toggleMenu} className="text-[#FDFDFD]">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-8">
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

                            <div className="mt-auto pt-12 border-t-2 border-[#E84596]/30">
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
