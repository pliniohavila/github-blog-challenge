import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BlogContextProvider } from "./contexts/BlogContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/styles";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
    </ThemeProvider>
  )
}

export default App
