"use client"
import { cn } from "@/utils/misc";
import { CSSProperties, ReactNode } from "react";

type TButton = {
    variant?: TVariant;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

type TVariant = "filled" | "outlined"

export const Button:React.FC<TButton> = ({
    children,
    className,
    variant = "filled",
    style,
    type,
    ...props
}) => {
    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if(props.onClick instanceof Function) {
            props.onClick(e);
        }
    }
    return (
        <button 
            type={type ?? type}
            className={cn("block w-[50px] h-[30px] rounded-full", variant === "filled" ? "bg-ironside-grey" : "bg-transparent", className)}
            onClick={onClick}
        >{children}</button>
    )
}