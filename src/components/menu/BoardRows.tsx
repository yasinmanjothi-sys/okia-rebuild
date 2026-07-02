import type { BoardRow, BoardSection } from '@/data/menuBoards';

function SectionBlock({ section, textClass }: { section: BoardSection; textClass: string }) {
    return (
        <div className={textClass}>
            <h3 className="!font-host font-extrabold uppercase tracking-wide text-base md:text-lg mb-1">{section.title}</h3>
            {section.note && <p className="font-host text-xs md:text-sm opacity-80 mb-3">{section.note}</p>}

            <ul className={`flex flex-col gap-3 ${section.note ? '' : 'mt-3'}`}>
                {section.items.map((item) => (
                    <li key={`${item.code ?? ''}${item.name}`}>
                        <p className="font-host text-sm md:text-base leading-snug">
                            {item.code && <span className="opacity-80">{item.code} </span>}
                            {item.name}
                            {item.note && <span className="opacity-80"> {item.note}</span>}
                        </p>
                        <p className="font-host font-bold text-sm md:text-base">{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BoardRows({ rows, textClass }: { rows: BoardRow[]; textClass: string }) {
    return (
        <div className="flex flex-col gap-10 md:gap-12">
            {rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-1 ${row.length === 2 ? 'md:grid-cols-2' : ''} gap-8 md:gap-16`}>
                    {row.map((section) => (
                        <SectionBlock key={section.title} section={section} textClass={textClass} />
                    ))}
                </div>
            ))}
        </div>
    );
}
