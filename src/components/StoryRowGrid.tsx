import StoryRow from '@/components/StoryRow';
import EdgeMaskField from '@/components/EdgeMaskField';
import { ColumnSide } from '@/components/menu/MenuBoardFrame';

const CARAMEL = '#FFD695';
const MAROON = '#6E0D31';

const rowOneImages = [
    '/signature food/Chilli-prawns-bao-buns_landscape_Hero_side-on-2_HR-e1695683104967.jpg',
    '/signature drinks/hanoi-egg-coffee-latte-art-cocoa-twist.jpg',
    '/signature food/Goi-Cuon-Vietnamese-Spring-Rolls.jpg.jpg',
];

const rowTwoImages = [
    '/signature drinks/coconut-coffee-blog-2.jpg',
    '/signature food/Lemongrass-Pork-Banh-Mi.jpg',
    '/signature drinks/77768-Vietnamese-Iced-Coffee-DDMFS-4x3-62f34e1d4658433a83801c8533dbcafe.jpg',
];

export default function StoryRowGrid() {
    return (
        <>
            {/* First gallery — full-bleed maroon, with the same ambient edge-popping masks as the hero instead of one static mask */}
            <section data-nav-theme="dark" className="relative w-full overflow-hidden bg-maroon">
                <ColumnSide color={CARAMEL} side="left" />
                <ColumnSide color={CARAMEL} side="right" />
                <EdgeMaskField sizeScale={0.8} />
                <StoryRow
                    copy="Set on 136 Riverside Drive, O KIA welcomes guests from sunrise through to last call."
                    images={rowOneImages}
                    dark
                />
            </section>

            {/* Second gallery — full-bleed green, breaking up the white the same way */}
            <section data-nav-theme="light" className="relative w-full overflow-hidden bg-green">
                <ColumnSide color={MAROON} side="left" />
                <ColumnSide color={MAROON} side="right" />
                <EdgeMaskField sizeScale={0.8} />
                <StoryRow
                    copy="You'll find us tucked into Nairobi's coffee culture — serving an all-day menu, baked treats, & damn good Phin coffee."
                    images={rowTwoImages}
                    flip
                />
            </section>
        </>
    );
}
