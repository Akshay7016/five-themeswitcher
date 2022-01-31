import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {

    const theme = useContext(ThemeContext)[0];
    // [0] to find 1st value of array of ThemeContext context

    const currentTheme = AppTheme[theme];
    // AppTheme[theme] => To get object having name theme

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
            height: "180px"
        }}>
            <h1>Context API Theme Toggler</h1>

            <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#FFF",
                    border: `${currentTheme.border}`
                }}>
                Click me
            </button>
        </div>
    );
}

export default HeroSection;