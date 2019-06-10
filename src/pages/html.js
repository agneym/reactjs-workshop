import React from "react"

import Layout from "../components/layout"
import Splitter from "../components/splitter"

function HTMLPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <h1>HTML</h1>
        </Splitter.Left>
        <Splitter.Right>
          <p>Right</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  )
}

export default HTMLPage
