import { cn } from "@/utils/misc";

type TUserChat = {
    className?: string;
    text: string;
}

export const UserChat:React.FC<TUserChat> = ({
    className,
    text
}) => {
    return (
        <div className={cn("text-harp bg-thunder rounded-3xl px-5 py-[10px] whitespace-pre-line" , className)} >{text}</div>
    )
}