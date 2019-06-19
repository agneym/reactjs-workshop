import React from "react";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";

function CSSPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Heading title="CSS" subtitle="Cascading Style Sheets" />
        </Splitter.Left>
        <Splitter.Right nextLink="/js" stage={2}>
          <p>Right</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  );
}

export default CSSPage;
