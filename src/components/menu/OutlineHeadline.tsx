type OutlineHeadlineProps = {
    children: string;
    color: string;
    className?: string;
    /** Set when reusing this purely as a decorative flourish (not real page content),
     *  so it renders as a plain, screen-reader-hidden div instead of a duplicate heading. */
    decorative?: boolean;
};

/**
 * The giant outline-only (stroked, unfilled) display word used for "FOOD" /
 * "DRINK" on the printed boards. `-webkit-text-stroke` is the standard CSS
 * technique for this — no new font asset or dependency needed.
 */
export default function OutlineHeadline({ children, color, className = '', decorative = false }: OutlineHeadlineProps) {
    const Tag = decorative ? 'div' : 'h2';

    return (
        <Tag
            aria-hidden={decorative || undefined}
            className={`font-okia uppercase leading-none select-none ${className}`}
            style={{
                color: 'transparent',
                WebkitTextStroke: `2.5px ${color}`,
            }}
        >
            {children}
        </Tag>
    );
}
