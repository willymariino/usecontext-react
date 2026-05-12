import { ThemeProvider } from "./context/globalcontext"
import Header from "./Header"

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
