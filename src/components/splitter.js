import React from "react"
import styled from "styled-components"

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
`

function Left({ children }) {
  return <section>{children}</section>
}

function Right({ children }) {
  return <section>{children}</section>
}

function Splitter({ children }) {
  return <Container>{children}</Container>
}

Splitter.Left = Left
Splitter.Right = Right

export default Splitter
