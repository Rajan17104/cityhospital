import { createContext, useReducer } from "react";
import { themeReducer } from "./Reducer/theme.reducer";
import { TOGGLE_THEME } from "./ActionType";


export const ThemeContext = createContext()

const initState = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state , dispatch] = useReducer(themeReducer ,initState )

    const themeToggle = (theme) => {
        const newtheme = theme === 'light' ? 'dark' : 'light'
        dispatch({type : TOGGLE_THEME , payload : newtheme})
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                themeToggle     
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}

