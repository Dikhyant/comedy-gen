import { cn } from "@/utils/misc";

type TAIChat = {
    className?: string;
    text: string;
}

export const AIChat:React.FC<TAIChat> = ({
    className,
    text
}) => {
    return (
        <div className={cn("text-harp" , className)} >{"chAi:    "}{text}</div>
    )
}