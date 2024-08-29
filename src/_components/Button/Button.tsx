import { COLORS } from "@/utils/constants"
import { cn } from "@/utils/misc";
import { CSSProperties, ReactNode } from "react";

type TButton = {
    variant?: TVariant;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
}

type TVariant = "filled" | "outlined"

export const Button:React.FC<TButton> = ({
    children,
    className,
    variant = "filled",
    style,
}) => {
    return (
        <button 
        /* style={{
            display: "block",
            width: 50,
            height: 30,
            backgroundColor: variant === "filled" ? COLORS["ironside-grey"] : "transparent",
            borderRadius: 1000,
            ...style
        }}  */
            className={cn("block w-[50px] h-[30px] rounded-full", variant === "filled" ? "bg-ironside-grey" : "bg-transparent", className)}
        >{children}</button>
    )
}