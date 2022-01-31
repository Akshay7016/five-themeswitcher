import React, { useContext } from "react";
import ThemeContext from '../context/ThemeContext'

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
                                            // Default value of context used here

    return(
        <div onClick={ () => {
            setThemeMode(themeMode==="light" ? "dark" : "light");
        }}>

        <span>{themeMode==="light" ? "Turn Off" : "Lights On"}</span>
        </div>
    );

}

export default ThemeToggler;