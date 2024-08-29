"use client"
import { createContext, useContext, useState } from "react";

type TThemeContext = {
    isDark: boolean;
    setIsDark: ((isDark: boolean) => void);
}

const ThemeContext = createContext<TThemeContext>({isDark: true, setIsDark: () => {}});
export const useThemeContext = () => useContext(ThemeContext);

type TThemeContextProvider = {
    children: React.ReactNode;
}
export const ThemeContextProvider:React.FC<TThemeContextProvider> = ({children}) => {
    const [isDark, setIsDark] = useState<boolean>(true);
    return (
        <ThemeContext.Provider value={{isDark: isDark, setIsDark: setIsDark}} >{children}</ThemeContext.Provider>
    )
}