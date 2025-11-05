import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const alterTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    const contextValue = {
        theme,
        alterTheme,
    }

    return(
        <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    )
}