import { createContext, useReducer, useState } from "react"

export const ThemeContext = createContext()

const data = [
    {
        title: "mangiare",
        description: "la pasta",
        isCompleted: false
    },
    {
        title: "bere",
        description: "il vino",
        isCompleted: false
    }

]

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")
    const [tasks, dispatchTasks] = useReducer(reducerTasks, data) // data è l'initial state

    const toggleTheme = () => {
        // setTheme("dark")
        // setTheme("light") queste sono assegnazioni assolute, non condizionate dal valore precedente

        // considera il valore precedente, vede se prevValue è dark, lo imposta a light, altrimenti se è light lo imposta a dark
        setTheme((prevValue) => (prevValue === "dark") ? "light" : "dark")
    }

    function reducerTasks(state, action) {
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    {
                        title: action.payload,
                        description: "",
                        isCompleted: false
                    }
                ]
            case "DELETE":
                return [
                    ...state.filter((task, index) => {
                        return index !== action.payload
                    })
                ]
            case "CLOSED":
                return
            case "OPEN":
                return
            case "RESET":
                return []
            case "TOGGLE":
                return [
                    ...state.map((task, index) => {
                        return index == action.payload ? ({ ...task, isCompleted: !task.isCompleted }) : task
                    })
                ]

            default:
                return state
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, tasks, dispatchTasks }}>
            {children}
        </ThemeContext.Provider>
    )
}

