'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function StoryPage() {
    return (
        <main className="w-full min-h-screen bg-neutral p-2 flex flex-col gap-2 overflow-x-hidden relative">
            
            {/* Navbar container */}
            <div className="w-full flex justify-center sticky top-0 z-[90] pointer-events-none">
                <div className="w-full max-w-full px-0 pointer-events-auto">
                    <Navbar />
                </div>
            </div>

            <div className="flex-1 bg-[#6E0D31] rounded-[32px] flex flex-col items-center justify-center overflow-hidden w-full relative group border-sticker min-h-[85vh]">
                {/* Integrated Frame SVG */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <Image 
                        src="/Curtains for story section .svg" 
                        alt="Story Section Frame" 
                        fill 
                        className="object-fill"
                        priority
                    />
                </div>

                <div className="relative z-20 flex flex-col items-center max-w-[90%] md:max-w-[75%] mx-auto text-center py-12 md:py-20 p-8 md:p-16">
                    <h2 className="font-okia text-5xl md:text-8xl lg:text-9xl !text-[#9FCC45] drop-shadow-md mb-8 md:mb-12 uppercase tracking-[0.1em] md:tracking-[0.2em]">
                        The Story
                    </h2>

                    <div className="flex flex-col gap-10 text-[#9FCC45]">
                        <p className="font-host text-3xl md:text-5xl lg:text-6xl font-black leading-tight italic uppercase tracking-tight">
                            &quot;An expression of surprise, wonder, and sensory delight.&quot;
                        </p>
                        
                        <div className="space-y-10 font-inter text-xl md:text-2xl font-bold tracking-wide max-w-4xl mx-auto leading-relaxed">
                            <p>
                                Born from the vibrant street culture of Saigon and the theatrical soul of Vietnamese performance art, O KIA Coffee is more than a cafe.
                            </p>
                            <p>
                                We bring the bold artistry and authentic tastes of Vietnam to Nairobi, creating a space where every sip tells a story and every visit is a sensory overload in the best way possible.
                            </p>
                            <p>
                                Our name, &quot;O KIA,&quot; reflects that moment of discovery—the gasp of joy when you encounter something truly extraordinary. From our traditional Phin-brewed coffee to our modern Vietnamese specialties, we invite you to experience the theater of flavor.
                            </p>
                        </div>
                        
                        <div className="pt-12">
                             <span className="font-okia text-4xl md:text-5xl text-[#9FCC45] tracking-[0.3em] uppercase opacity-80">Authentic Saigon Soul</span>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
