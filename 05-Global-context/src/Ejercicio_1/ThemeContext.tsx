import React, { createContext, use, useContext, useState, type ReactNode } from 'react'

interface ThemeState{
    theme: "dark" | "light";
    toggleTheme: ()=> void;
}
 
export const ThemeContext = createContext<ThemeState>({
theme: "dark",
    toggleTheme: ()=> {},
 
});
export const ThemeProvider = ({children}:{children:ReactNode})=>{
    const [theme, setTheme] =useState<'dark' | 'light'>('dark');

const toggleTheme = ()=> {
setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
};
 



    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
    }
export const useThemeContext = () =>useContext(ThemeContext);

