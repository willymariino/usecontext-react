import { ThemeProvider } from "./context/globalcontext"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
