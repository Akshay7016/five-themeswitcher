import { createContext } from "react";

const ThemeContext =createContext(["light",()=>{}]);
                                //Default value of Context

// const ThemeContext =React.createContext(["light",()=>{}]);

export default ThemeContext;