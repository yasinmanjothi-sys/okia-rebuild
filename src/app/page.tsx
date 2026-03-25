import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StoryRowGrid from '@/components/StoryRowGrid';
import Row2Grid from '@/components/Row2Grid';
import Row3MediaGrid from '@/components/Row3MediaGrid';
import Row4Artwork from '@/components/Row4Artwork';
import FooterSection from '@/components/FooterSection';
import FloatingStickers from '@/components/FloatingStickers';
import AnimatedRibbon from '@/components/AnimatedRibbon';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-neutral p-2 flex flex-col gap-2 mt-0 overflow-x-hidden">
             {/* Floating global graphics spanning vertically */}
             <FloatingStickers />

             {/* Dynamic Solid Navbar - Now at the very top */}
             <div className="w-full flex justify-center sticky top-0 z-[90] pointer-events-none mb-0">
                <div className="w-full max-w-full px-0 pointer-events-auto">
                    <Navbar />
                </div>
             </div>

             {/* Top Ribbon - Now below the Navbar */}
             <div className="w-full z-[85]">
                <AnimatedRibbon 
                    items={["Ca Phe Phin", "Tuong Theater", "Sensory Overload", "Saigon Street Vibe", "Authentic Banh Mi"]} 
                    bgColor="bg-[#E84596]" 
                    textColor="text-[#FDFDFD]" 
                    maskIcon={true}
                    speed={40}
                />
             </div>

             {/* Row 1: The Hero Full Viewport Block (with its bottom anchored peeking masks) */}
             <div className="w-full h-[90vh] relative flex-shrink-0 z-[80] block">
                 <HeroSection />
             </div>

             {/* Row 1.5: The Story Row */}
             <StoryRowGrid />

             {/* Row 2: The 3-Column Masonry Menu Strategy mapping directly to O KIA content */}
             <Row2Grid />

             {/* Pure Mask Transition Ribbon relocated below Row 2 */}
             <div className="w-full z-[85]">
                 <AnimatedRibbon 
                     items={["mask"]} 
                     bgColor="bg-[#6E0D31]" 
                     textColor="text-[#FDFDFD]" 
                     pureMasks={true}
                     speed={40}
                 />
             </div>

             {/* Row 3: Graphics & Media Layout */}
             <Row3MediaGrid />

             {/* Social Divider Ribbon */}
             <div className="w-full relative z-[85]">
                 <AnimatedRibbon 
                     items={["Follow the vibe on Instagram", "Join the Street Club", "Tag @okiacoffee", "Share the chaos"]} 
                     bgColor="bg-[#9FCC45]" 
                     textColor="text-[#FDFDFD]" 
                     maskIcon={true}
                     speed={40}
                 />
             </div>
             
             {/* Row 4: Pure Artwork Display */}
             <Row4Artwork />

             {/* Poppi Style Massive Footer */}
             <FooterSection />
        </main>
    );
}
