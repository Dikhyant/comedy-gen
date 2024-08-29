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
    onChange?: ((e: ChangeEvent<HTMLInputElement>) => void);
    onSubmitText?: ((text: string) => void);
    onSubmit?: ((e: FormEvent<HTMLFormElement>) => void);
}

export const PrimaryTextInput:React.FC<TPrimaryTextInput> = ({
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
    }

    return (
        <form 
            className={cn("flex items-center justify-between rounded-full w-[100px] h-[52px] p-[6px] gap-x-2", isDark ? "bg-thunder" : "bg-white-smoke", className)} 
            onSubmit={onSubmit}
        >
            <input
                placeholder={placeholder ? placeholder : "Say something friend..."}
                className={cn("bg-thunder w-full ml-[40px] block text-silver placeholder:text-silver")} 
                onChange={onChange}
            />
            <Button 
                className="h-full aspect-square flex items-center justify-center"
                
            >
                <UpArrow color={COLORS.thunder} />
            </Button>
        </form>
    )
}