import { ThemeContext } from "../context/globalcontext"
import { useContext } from "react"


function Main() {

    const { tasks, dispatchTasks } = useContext(ThemeContext)

    return (
        <>
            <h1>to-do list</h1>

            <button onClick={() => {
                dispatchTasks({ type: "RESET" })

            }}>reset</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.title}
                        {task.isCompleted}
                        <button onClick={() => {
                            dispatchTasks({ type: "TOGGLE", payload: index })

                        }}> on/off</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Main
