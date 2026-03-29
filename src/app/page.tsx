import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StoryRowGrid from '@/components/StoryRowGrid';
import Row2Grid from '@/components/Row2Grid';
import Row3MediaGrid from '@/components/Row3MediaGrid';
import Row4Artwork from '@/components/Row4Artwork';
import FooterSection from '@/components/FooterSection';
import AnimatedRibbon from '@/components/AnimatedRibbon';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-neutral p-2 flex flex-col gap-2 mt-0 overflow-x-hidden">
             {/* Dynamic Solid Navbar - Now at the very top */}
             <div className="w-full flex justify-center sticky top-0 z-[90] pointer-events-none mb-0">
                <div className="w-full max-w-full lg:max-w-[1600px] lg:mx-auto px-0 pointer-events-auto">
                    <Navbar />
                </div>
             </div>

             {/* Row 1: The Hero Full Viewport Block */}
             <div className="w-full h-[90vh] lg:h-screen lg:max-w-[1600px] lg:mx-auto relative flex-shrink-0 z-[80] block order-1 lg:order-none">
                 <HeroSection />
             </div>

             {/* Row 1.5: The Story Row - MOVED DIRECTLY AFTER HERO */}
             <div className="w-full order-2 lg:order-none">
                <StoryRowGrid />
             </div>

             {/* Top Ribbon - MOVED BELOW STORY */}
             <div className="w-full z-[85] order-3">
                <AnimatedRibbon 
                    items={["Ca Phe Phin", "Tuong Theater", "Sensory Overload", "Saigon Street Vibe", "Authentic Banh Mi"]} 
                    bgColor="bg-[#E84596]" 
                    textColor="text-[#FDFDFD]" 
                    maskIcon={true}
                    speed={40}
                />
             </div>

             {/* Row 2: The 3-Column Masonry Menu Strategy - MOVED UP IN CODE FOR DESKTOP */}
             <div className="w-full order-6 lg:order-none">
                <Row2Grid />
             </div>

             {/* Pure Mask Transition Ribbon relocated below Row 2 */}
             <div className="w-full z-[85] order-5 lg:order-none">
                  <AnimatedRibbon 
                      items={["mask"]} 
                      bgColor="bg-[#6E0D31]" 
                      textColor="text-[#FDFDFD]" 
                      pureMasks={true}
                      speed={40}
                  />
             </div>

             {/* Row 3: Graphics & Media Layout - MOVED DOWN IN CODE FOR DESKTOP */}
             <div className="w-full order-4 lg:order-none">
                <Row3MediaGrid />
             </div>

             {/* Social Divider Ribbon */}
             <div className="w-full relative z-[85] order-7 lg:order-none">
                 <AnimatedRibbon 
                     items={["Follow the vibe on Instagram", "Join the Street Club", "Tag @okiacoffee", "Share the chaos"]} 
                     bgColor="bg-[#9FCC45]" 
                     textColor="text-[#FDFDFD]" 
                     maskIcon={true}
                     speed={40}
                 />
             </div>
             
             {/* Row 4: Pure Artwork Display */}
             <div className="w-full order-8 lg:order-none">
                <Row4Artwork />
             </div>

             {/* Poppi Style Massive Footer */}
             <div className="w-full order-9 lg:order-none">
                <FooterSection />
             </div>
        </main>
    );
}
