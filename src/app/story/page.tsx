import PageHeaderBand from '@/components/theater/PageHeaderBand';
import StoryRow from '@/components/StoryRow';
import Divider from '@/components/Divider';

const rowOneImages = [
    '/signature food/57d79361-befa-42f8-aaaf-d22e0f967c3c--2022-0811_pan-fried-tofu_seo_final_3x2_julia-gartland_171.jpg',
    '/signature drinks/coconut-coffee-blog-2.jpg',
    '/signature food/Goi-Cuon-Vietnamese-Spring-Rolls.jpg.jpg',
];

const rowTwoImages = [
    '/signature drinks/hanoi-egg-coffee-latte-art-cocoa-twist.jpg',
    '/signature food/Chilli-prawns-bao-buns_landscape_Hero_side-on-2_HR-e1695683104967.jpg',
    '/signature drinks/77768-Vietnamese-Iced-Coffee-DDMFS-4x3-62f34e1d4658433a83801c8533dbcafe.jpg',
];

export default function StoryPage() {
    return (
        <main className="w-full">
            <PageHeaderBand
                title="The Story"
                badgeText="The Theatre of Masks"
                maskSrc="/Main Masks /O (sadness).svg"
                maskAlt="Ố — the Sadness mask"
            />

            <section data-nav-theme="light" className="w-full bg-neutral pt-16 md:pt-24 px-6">
                <p className="max-w-3xl mx-auto text-center font-host text-lg md:text-2xl font-bold text-maroon leading-relaxed">
                    Vietnam&apos;s coffee culture, seen through an artistic lens, resembles a living stage — where
                    emotions of joy, anger, love, and sorrow unfold, expressed vividly like the faces of traditional
                    Hát Bội masks.
                </p>
            </section>

            <StoryRow
                illustrationSrc="/Main Masks /Hy (joy) svg.svg"
                illustrationAlt="Hỷ — Joy mask"
                copy="Hỷ (Joy): a cheerful expression with a smiling mouth and delighted eyes. One of the five faces that carry the spirit of every cup we pour."
                images={rowOneImages}
            />

            <Divider className="max-w-6xl mx-auto" />

            <StoryRow
                illustrationSrc="/Main Masks /Ai (love).svg"
                illustrationAlt="Ái — Love mask"
                copy="The design concept of Ô KIA is envisioned as a stage: a vibrant, dynamic space that celebrates the diversity and liveliness of Vietnamese coffee culture, Nairobi-brewed."
                images={rowTwoImages}
                flip
            />

            <Divider className="max-w-6xl mx-auto" />
        </main>
    );
}
