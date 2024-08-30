import { useThemeContext } from "@/state/theme";
import { cn } from "@/utils/misc";

type TUserChat = {
    className?: string;
    text: string;
}

export const UserChat:React.FC<TUserChat> = ({
    className,
    text
}) => {
    const {isDark} = useThemeContext();
    return (
        <div className={
            cn(
                "rounded-3xl px-5 py-[10px] whitespace-pre-line" , 
                isDark ? "text-harp bg-thunder" : "text-woodsmoke bg-white-smoke" ,
                className
            )} >{text}</div>
    )
}