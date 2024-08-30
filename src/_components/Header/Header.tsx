import { useState } from "react"
import { Select } from "../Select/Select"

const options:string[] = ["Dark", "Light", "System"]

export const Header:React.FC<any> = () => {
    const [currentTheme, setCurrentTheme] = useState<string>("Dark");
    return (
        <header className="w-full h-14 flex items-center justify-between px-6" >
            <h1 className="text-mountain-mist" >chAi</h1>
            <Select options={options} />
        </header>
    )
}