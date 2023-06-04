import React,{ useContext } from "react";
import { ThemeContext, themes } from "./themeContext";
import { Button } from "./button";

const ToggleButton = () =>{
    const { theme,setTheme } = useContext(ThemeContext)
    console.log(theme)
    return(
        <div>
            <Button onClick={()=>{setTheme(theme === themes.light ? themes.dark: themes.light)}}>Change Theme</Button >
        </div>
    )
} 


export { ToggleButton }