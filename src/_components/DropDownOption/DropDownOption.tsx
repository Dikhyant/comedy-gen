"use client"
import { cn } from "@/utils/misc";
import { OptionButton } from "./OptionButton/OptionButton";
import { useThemeContext } from "@/state/theme";

type TDropDownOption = {
    className?: string;
    options: string[];
    value: string;
    onSelect?: ((value: string) => void);
}

export const DropDownOption:React.FC<TDropDownOption> = ({
    className,
    options,
    value,
    ...props
}) => {
    const {isDark} = useThemeContext();
    function onSelect(value: string) {
        if(props.onSelect instanceof Function && props.onSelect.length === 1) {
            props.onSelect(value);
        }
    }
    return (
        <div className={
            cn(
                "flex flex-col w-[200px]  rounded-xl  border-2 p-2",
                isDark ? "border-white/10 bg-thunder" : "border-black/10 bg-white",
                className)} >
            {
                options.map(item => {
                    const isSelected = item === value;
                    return (
                        <OptionButton 
                            key={item}
                            value={item}
                            className="w-full"
                            isSelected={isSelected}
                            onClick={() => {onSelect(item)}}
                        />
                    )
                })
            }
        </div>
    )
}