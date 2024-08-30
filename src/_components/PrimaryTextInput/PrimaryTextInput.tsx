"use client"
import { useThemeContext } from "@/state/theme"
import { COLORS } from "@/utils/constants";
import { cn } from "@/utils/misc"
import { ChangeEvent, ChangeEventHandler, CSSProperties, FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import UpArrow from "../Icons/UpArrow";

type TPrimaryTextInput = {
    style?: CSSProperties;
    className?: string;
    placeholder?: string;
    isFormToBeClearedOnSubmit?: boolean;
    onChange?: ((e: ChangeEvent<HTMLInputElement>) => void);
    onSubmitText?: ((text: string) => void);
    onSubmit?: ((e: FormEvent<HTMLFormElement>) => void);
}

export const PrimaryTextInput:React.FC<TPrimaryTextInput> = ({
    isFormToBeClearedOnSubmit = false,
    style,
    className,
    placeholder,
    ...props
}) => {
    const {isDark} = useThemeContext();
    const [text, setText] = useState<string>("");

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.currentTarget.value);
        if(props.onChange instanceof Function) {
            props.onChange(event);
        }
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(props.onSubmitText instanceof Function) {
            props.onSubmitText(text);
        }
        if(isFormToBeClearedOnSubmit) {
            setText("");
        }
    }

    return (
        <form 
            className={cn("flex items-center justify-between rounded-full w-[100px] h-[52px] p-[6px] px-3 gap-x-2", isDark ? "bg-thunder" : "bg-white-smoke", className)} 
            onSubmit={onSubmit}
        >
            <input
                placeholder={placeholder ? placeholder : "Say something friend..."}
                className={
                    cn(
                        "bg-transparent w-11/12 ml-[40px] block focus:outline-none",
                        isDark ? "text-silver placeholder:text-silver" : "text-woodsmoke placeholder:text-woodsmoke"
                    )} 
                value={text}
                onChange={onChange}
            />
            <Button 
                className={
                    cn(
                        "h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center",
                        isDark ? text.length === 0 ? "bg-ironside-grey text-thunder" : "bg-white text-black" : text.length === 0 ? "bg-iron text-white-smoke" : "bg-black text-white-smoke",
                    )}    
            >
                <UpArrow  />
            </Button>
        </form>
    )
}