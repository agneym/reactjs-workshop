import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import theme from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.normal};
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {children}
        <GlobalStyle />
      </main>
    </ThemeProvider>
  )
}

export default Layout
