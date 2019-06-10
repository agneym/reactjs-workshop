import React from "react"
import styled from "styled-components"

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
  grid-column-gap: 1rem;
  align-items: center;
`

function Left({ className, children }) {
  return <section className={className}>{children}</section>
}

function Right({ className, children }) {
  return <section className={className}>{children}</section>
}

function Splitter({ children }) {
  return <Container>{children}</Container>
}

Splitter.Left = Left
Splitter.Right = Right

export default Splitter
