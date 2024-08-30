import { useEffect, useState } from "react"
// import { Select } from "../Select/Select"
import { useThemeContext } from "@/state/theme"
import dynamic from "next/dynamic"
const Select = dynamic(() => import("@/_components/Select/Select"), {ssr: false})

const options:string[] = ["Dark", "Light", "System"]

export const Header:React.FC<any> = () => {
    const {setIsDark} = useThemeContext();
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
        <header className="w-full h-14 flex items-center justify-between px-6" >
            <h1 className="text-mountain-mist" >chAi</h1>
            <Select options={options} onChange={onThemeChange} />
        </header>
    )
}