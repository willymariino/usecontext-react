import { ThemeContext } from "./context/globalcontext"
import { useContext } from "react"

function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)


    return (
        <>
            <h1>Titolo</h1>
            {theme}
            <br />
            <button onClick={toggleTheme}>
                light/dark
            </button>
        </>
    )
}

export default Header