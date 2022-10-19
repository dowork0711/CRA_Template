import React from "react"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import RootRouter from "./pages"
import { GlobalStyle } from "./styles/globalStyles"
import theme from "./styles/themes"

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <RootRouter />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default App
