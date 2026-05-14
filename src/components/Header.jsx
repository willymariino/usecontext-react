import { ThemeContext } from "../context/globalcontext"
import { useContext } from "react"

function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const styles = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "1rem",
        margin: "1rem",
        border: "1px solid red",
        width: "fit-content",
        cursor: "pointer"


    }


    return (
        <>
            <h1>Titolo</h1>

            <div style={styles} onClick={toggleTheme}>
                test
            </div>
        </>
    )
}

export default Header