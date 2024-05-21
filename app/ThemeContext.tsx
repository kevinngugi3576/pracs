
"use client"
import React, { createContext, ReactNode, useState} from "react"

export type ThemeContextState = {
    theme: string;
    setTheme: ()=>void;

}

export const ThemeContext = createContext<ThemeContextState>({
    theme:"light",
    setTheme:()=>{}
})

export const ThemeContextProvider = ({ children }:React.PropsWithChildren<{}>)=>{
    const [theme, setTheme] = useState<string>("light")

    const handleThemeChange = ()=>{
        setTheme(theme === "light"? "dark":"light")
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme:handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}