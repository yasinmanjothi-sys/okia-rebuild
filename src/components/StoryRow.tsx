import Image from 'next/image';
import PhotoStack from '@/components/PhotoStack';

type StoryRowProps = {
    /** Optional static mask illustration — omit when the row sits in a section that already
     *  has the ambient `EdgeMaskField` popping masks around it. */
    illustrationSrc?: string;
    illustrationAlt?: string;
    copy: string;
    images: string[];
    flip?: boolean;
    /** Set when the row sits on a dark (e.g. maroon) background, so the copy reads in a light color instead. */
    dark?: boolean;
};

export default function StoryRow({ illustrationSrc, illustrationAlt, copy, images, flip = false, dark = false }: StoryRowProps) {
    return (
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center max-w-6xl mx-auto py-16 md:py-24 px-6">
            <div className={`flex flex-col items-center md:items-start text-center md:text-left gap-8 ${flip ? 'md:order-2' : 'md:order-1'}`}>
                {illustrationSrc && (
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                        <Image src={illustrationSrc} alt={illustrationAlt ?? ''} fill className="object-contain" />
                    </div>
                )}
                <p className={`font-host text-lg md:text-xl font-bold uppercase tracking-wide max-w-sm ${dark ? 'text-neutral' : 'text-maroon'}`}>
                    {copy}
                </p>
            </div>

            <div className={`${flip ? 'md:order-1' : 'md:order-2'} px-6 md:px-0`}>
                <PhotoStack images={images} />
            </div>
        </div>
    );
}
