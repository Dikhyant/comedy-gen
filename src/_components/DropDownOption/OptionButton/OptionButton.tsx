"use client"
import { useThemeContext } from "@/state/theme";
import { cn } from "@/utils/misc";

type TOptionButton = {
    className?: string;
    value: string;
    isSelected?: boolean;
    onClick?: (() => void);
}

export const OptionButton:React.FC<TOptionButton> = ({
    className,
    value,
    isSelected = false,
    ...props
}) => {
    const {isDark} = useThemeContext();
    function onClick() {
        if(props.onClick instanceof Function) {
            props.onClick();
        }
    }
    return (
        <button 
            className={
                cn(
                    "flex items-center justify-between  rounded-md p-3",
                    isDark ? "hover:bg-charcoal-grey" : "hover:bg-snow-drift",
                    className)} 
            onClick={onClick}
        >
            <div>{value}</div>
            {isSelected && <div className={cn("w-3 h-3 rounded-full" , isDark ? "bg-white" : "bg-thunder")} ></div>}
        </button>
    )
}