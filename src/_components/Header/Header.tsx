import { useEffect, useState } from "react"
// import { Select } from "../Select/Select"
import { useThemeContext } from "@/state/theme"
import dynamic from "next/dynamic"
const Select = dynamic(() => import("@/_components/Select/Select"), {ssr: false})
import CharlieLogoBlack from "@/assets/images/charlie-chaplin-black.svg";
import CharlieLogoWhite from "@/assets/images/charlie-chaplin-white.svg";
import Image from "next/image";
import { cn } from "@/utils/misc";

const options:string[] = ["Dark", "Light", "System"]

export const Header:React.FC<any> = () => {
    const {isDark, setIsDark} = useThemeContext();
    const [currentTheme, setCurrentTheme] = useState<string>("Dark");

    useEffect(() => {
        if(!window.matchMedia) return;
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => {
            if(e.matches) {
                setIsDark(true);
                return;
            }

            setIsDark(false);
        })
    }, []);

    useEffect(() => {
        if(currentTheme === "Dark" || currentTheme === "System" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            return;
        }

        setIsDark(false);
    }, [currentTheme]);

    function onThemeChange(theme: string) {
        setCurrentTheme(theme);
    }
    return (
        <header className={cn("w-full h-14 flex items-center justify-between px-6", isDark ? "text-harp" : "text-woodsmoke")} >
            <div className="flex items-center gap-x-3" >
                <Image 
                    src={isDark ? CharlieLogoWhite : CharlieLogoBlack}
                    alt="Charlie Logo"
                    width={32}
                    height={32}
                />
                <div>Charlie</div>
            </div>
            <Select options={options} onChange={onThemeChange} />
        </header>
    )
}