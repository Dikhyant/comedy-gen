import { useThemeContext } from "@/state/theme";
import { cn } from "@/utils/misc";
import CharlieLogoBlack from "@/assets/images/charlie-chaplin-black.svg";
import CharlieLogoWhite from "@/assets/images/charlie-chaplin-white.svg";
import Image from "next/image";

type TAIChat = {
    className?: string;
    text: string;
}

export const AIChat:React.FC<TAIChat> = ({
    className,
    text
}) => {
    const {isDark} = useThemeContext();
    return (
        <div className={
            cn(
                "flex gap-x-3",
                isDark ? "text-harp" : "text-woodsmoke", 
                className
            )} 
        >
            <Image 
                src={isDark ? CharlieLogoWhite : CharlieLogoBlack}
                alt="Charlie Logo"
                width={32}
                height={32}
            /><div>{text}</div></div>
    )
}