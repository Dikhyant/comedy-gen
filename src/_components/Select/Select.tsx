"use client"
import { useState } from "react";
import { DropDownOption } from "../DropDownOption/DropDownOption";

type TSelect = {
    options: string[];
}

export const Select:React.FC<TSelect> = ({
    options,
    ...props
}) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");

    function onRootComponentClicked() {
        setIsDropDownVisible(prev => !prev);
    }

    function onSelect(value: string) {

    }

    return (
        <button 
            className="w-[74px] h-9 hover:bg-charcoal-grey rounded-lg text-harp relative" 
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