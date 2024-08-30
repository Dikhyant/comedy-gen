"use client"
import { useEffect, useState } from "react";
import { DropDownOption } from "../DropDownOption/DropDownOption";
import { cn } from "@/utils/misc";
import { useThemeContext } from "@/state/theme";

type TSelect = {
    options: string[];
    initialValue?: string;
    onChange?: ((value: string) => void);
}

export default function Select({
    initialValue,
    options,
    ...props
}: TSelect){
    const {isDark} = useThemeContext();
    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(true);
    const [value, setValue] = useState<string>(initialValue ? initialValue : options[0] ? options[0] : "");

    useEffect(() => {
        if(props.onChange instanceof Function) {
            props.onChange(value);
        }
    }, [value]);

    function onRootComponentClicked() {
        setIsDropDownVisible(prev => !prev);
    }

    function onSelect(value: string) {
        setValue(value);
    }

    return (
        <button 
            className={
                cn(
                    "w-[74px] h-9  rounded-lg relative", 
                    isDark ? "hover:bg-charcoal-grey text-harp" : "hover:bg-dawn-pink text-woodsmoke")} 
            onClick={onRootComponentClicked}
        >
            {value}
            {
                isDropDownVisible && 
                <DropDownOption 
                    options={options} 
                    value={value} 
                    className="absolute top-16 right-0" 
                    onSelect={onSelect}
                />
            }
        </button>
    )
}