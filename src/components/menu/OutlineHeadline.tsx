type OutlineHeadlineProps = {
    children: string;
    color: string;
    className?: string;
    /** Set when reusing this purely as a decorative flourish (not real page content),
     *  so it renders as a plain, screen-reader-hidden div instead of a duplicate heading. */
    decorative?: boolean;
    /** Renders as a solid fill instead of the stroked/unfilled outline treatment. */
    solid?: boolean;
};

/**
 * The giant display word used for "FOOD" / "DRINK" on the printed boards.
 * Defaults to the outline-only (stroked, unfilled) treatment via
 * `-webkit-text-stroke` — no new font asset or dependency needed. Pass
 * `solid` for a plain filled version of the same face.
 */
export default function OutlineHeadline({ children, color, className = '', decorative = false, solid = false }: OutlineHeadlineProps) {
    const Tag = decorative ? 'div' : 'h2';

    return (
        <Tag
            aria-hidden={decorative || undefined}
            className={`font-okia uppercase leading-none select-none ${className}`}
            style={
                solid
                    ? { color }
                    : { color: 'transparent', WebkitTextStroke: `2.5px ${color}` }
            }
        >
            {children}
        </Tag>
    );
}
