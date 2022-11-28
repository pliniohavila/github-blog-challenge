import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
    
  )
}

export default App
