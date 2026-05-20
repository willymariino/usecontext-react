import { ThemeContext } from "../context/globalcontext"
import { useContext, useState } from "react"


function Main() {

    const [title, setTitle] = useState("")
    const [indexButton, setIndexButton] = useState(null)

    const { tasks, dispatchTasks } = useContext(ThemeContext)

    return (
        <>
            <h1>to-do list</h1>

            <button onClick={() => {
                dispatchTasks({ type: "RESET" })

            }}>reset</button>

            <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                dispatchTasks({ type: "ADD", payload: title });
                setTitle("")
            }}>

                add
            </button>

            <ul>
                {tasks && tasks.map((task, index) => (
                    <li key={index}>
                        {indexButton !== index && <span className={task.isCompleted ? "show" : ""}>  {task.title} </span>

                        }

                        {
                            indexButton === index && <input type="text">

                            </input>
                        }

                        <button onClick={() => {
                            dispatchTasks({ type: "TOGGLE", payload: index })
                        }}> on/off</button>

                        <button onClick={() => {
                            dispatchTasks({ type: "DELETE", payload: index })
                        }}>
                            delete
                        </button>

                        <button onClick={() => {
                            setIndexButton(index)
                        }}>

                            edit
                        </button>


                    </li>
                ))}
            </ul>

        </>
    )
}

export default Main
