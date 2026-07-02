import { FanBottom } from '@/components/menu/MenuBoardFrame';

type DividerProps = {
    className?: string;
    variant?: 'line' | 'fan';
    color?: string;
};

export default function Divider({ className = '', variant = 'line', color = '#6E0D31' }: DividerProps) {
    if (variant === 'fan') {
        return (
            <div className={`w-full ${className}`}>
                <FanBottom color={color} className="opacity-70" />
            </div>
        );
    }

    return <hr className={`w-full border-t border-maroon/15 ${className}`} />;
}
