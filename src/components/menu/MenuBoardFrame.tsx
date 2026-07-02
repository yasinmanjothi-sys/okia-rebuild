'use client';
import { useId, type ReactNode } from 'react';

type FrameProps = {
    color: string;
    children: ReactNode;
    className?: string;
};

export const SCALLOP_UNIT = 56;
export const SCALLOP_HEIGHT = 28;
export const COLUMN_WIDTH = 16;
export const COLUMN_UNIT = 26;
export const FAN_UNIT = 72;
export const FAN_HEIGHT = 46;
export const FAN_RAYS = 7;

/** The scalloped awning valance — a row of hanging half-circles under a double hairline rule. */
export function ScallopTop({ color, className = '' }: { color: string; className?: string }) {
    const id = useId();
    const r = SCALLOP_UNIT / 2;
    return (
        <div className={`relative w-full ${className}`}>
            <div className="h-[3px] w-full" style={{ backgroundColor: color }} />
            <div className="h-px w-full mt-1" style={{ backgroundColor: color, opacity: 0.6 }} />
            <svg width="100%" height={SCALLOP_HEIGHT} className="block">
                <defs>
                    <pattern id={id} patternUnits="userSpaceOnUse" width={SCALLOP_UNIT} height={SCALLOP_HEIGHT}>
                        <path d={`M0,0 L0,${r} A${r},${r} 0 0 0 ${SCALLOP_UNIT},${r} L${SCALLOP_UNIT},0 Z`} fill={color} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id})`} />
            </svg>
        </div>
    );
}

/** A row of open hand-fan sunbursts. Pass `flip` to hang them from the top edge instead
 *  (e.g. a curtain valance) rather than sitting along the bottom. */
export function FanBottom({ color, className = '', flip = false }: { color: string; className?: string; flip?: boolean }) {
    const id = useId();
    const rayPolygons: string[] = [];
    const cx = FAN_UNIT / 2;
    const cy = FAN_HEIGHT;
    const radius = FAN_HEIGHT * 1.05;
    const spread = 165; // degrees of arc the whole fan covers
    const startAngle = 90 - spread / 2;
    const rayWidth = (spread / FAN_RAYS) * 0.68;
    for (let i = 0; i < FAN_RAYS; i++) {
        const centerAngle = startAngle + (spread / FAN_RAYS) * (i + 0.5);
        const a1 = ((centerAngle - rayWidth / 2) * Math.PI) / 180;
        const a2 = ((centerAngle + rayWidth / 2) * Math.PI) / 180;
        const x1 = cx + radius * Math.cos(a1);
        const y1 = cy - radius * Math.sin(a1);
        const x2 = cx + radius * Math.cos(a2);
        const y2 = cy - radius * Math.sin(a2);
        rayPolygons.push(`${cx},${cy} ${x1.toFixed(2)},${y1.toFixed(2)} ${x2.toFixed(2)},${y2.toFixed(2)}`);
    }
    return (
        <svg width="100%" height={FAN_HEIGHT} className={`block ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined}>
            <defs>
                <pattern id={id} patternUnits="userSpaceOnUse" width={FAN_UNIT} height={FAN_HEIGHT}>
                    {rayPolygons.map((pts, i) => (
                        <polygon key={i} points={pts} fill={color} />
                    ))}
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
    );
}

/** A fluted-column pilaster running the full height of its (relatively positioned) parent. */
export function ColumnSide({ color, side, className = '' }: { color: string; side: 'left' | 'right'; className?: string }) {
    const id = useId();
    return (
        <div
            className={`absolute top-0 bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} ${className}`}
            style={{ width: COLUMN_WIDTH }}
        >
            <div className="w-full" style={{ height: COLUMN_WIDTH * 1.4, backgroundColor: color }} />
            <svg width={COLUMN_WIDTH} height="100%" className="block">
                <defs>
                    <pattern id={id} patternUnits="userSpaceOnUse" width={COLUMN_WIDTH} height={COLUMN_UNIT}>
                        <rect
                            x={COLUMN_WIDTH * 0.15}
                            y={COLUMN_UNIT * 0.12}
                            width={COLUMN_WIDTH * 0.7}
                            height={COLUMN_UNIT * 0.58}
                            rx={COLUMN_WIDTH * 0.35}
                            fill={color}
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id})`} />
            </svg>
        </div>
    );
}

/**
 * The shared border treatment from the printed menu boards — a scalloped
 * awning valance along the top, fluted-column pilasters down each side, and
 * a row of open fan sunbursts along the bottom, all built as tiling SVG
 * patterns (not stretched fixed assets) so they repeat cleanly at any width.
 * The three pieces (`ScallopTop`, `ColumnSide`, `FanBottom`) are also
 * exported individually for reuse elsewhere.
 */
export default function MenuBoardFrame({ color, children, className = '' }: FrameProps) {
    return (
        <div className={`relative w-full ${className}`}>
            <ScallopTop color={color} />

            <div className="relative" style={{ paddingLeft: COLUMN_WIDTH, paddingRight: COLUMN_WIDTH }}>
                <ColumnSide color={color} side="left" />
                <ColumnSide color={color} side="right" />
                {children}
            </div>

            <FanBottom color={color} />
        </div>
    );
}
