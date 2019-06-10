import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Splitter from "../components/splitter"

const Title = styled.h1`
  font-size: 2rem;
`

const Subtitle = styled.sub`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.2rem;
  font-size: 1rem;
`

function HTMLPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Title>HTML</Title>
          <Subtitle>Hyper Text Markup Language</Subtitle>
        </Splitter.Left>
        <Splitter.Right>
          <p>Right</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  )
}

export default HTMLPage
