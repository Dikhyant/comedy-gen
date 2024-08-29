"use client"
import { useThemeContext } from "@/state/theme"
import { COLORS } from "@/utils/constants";
import { cn } from "@/utils/misc"
import { CSSProperties } from "react";
import { Button } from "../Button/Button";
import UpArrow from "../Icons/UpArrow";

type TPrimaryTextInput = {
    style?: CSSProperties;
    className?: string;
    placeholder?: string;
}

export const PrimaryTextInput:React.FC<TPrimaryTextInput> = ({
    style,
    className,
    placeholder,
}) => {
    const {isDark} = useThemeContext();
    return (
        <div 
        /* style={{
            display: "flex",
            columnGap: 5,
            alignItems: "center",
            borderRadius: 100,
            width: 500,
            height: 52,
            backgroundColor: COLORS.thunder,
            padding: 6,
            paddingLeft: 40,
            ...style
        }}  */
        className={cn("flex items-center justify-between rounded-full w-[100px] h-[52px] p-[6px] gap-x-2", isDark ? "bg-thunder" : "bg-white-smoke", className)} >
            <input
                /* style={{
                    flex: 1
                }} */
                placeholder={placeholder ? placeholder : "Say something friend..."}
                className={cn("bg-thunder w-full ml-[40px] block text-silver placeholder:text-silver")} />
            <Button 
                className="h-full aspect-square flex items-center justify-center"
            >
                <UpArrow color={COLORS.thunder} />
            </Button>
        </div>
    )
}