import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import GetStartedBtn from "../components/get-started/get-started-btn"
import Quote from "../components/get-started/quote"

const IndexPage = () => (
  <Layout>
    <SEO title="Get Started" />
    <main
      css={`
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <h1
        css={`
          font-size: 2rem;
        `}
      >
        FRONT-END WORKSHOP
      </h1>
      <Quote />
      <GetStartedBtn>Get Started</GetStartedBtn>
    </main>
  </Layout>
)

export default IndexPage
