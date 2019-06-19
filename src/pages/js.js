import React from "react";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";

function JSPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Heading title="JS" subtitle="JavaScript" />
        </Splitter.Left>
        <Splitter.Right stage={3}>
          <p>Right</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  );
}

export default JSPage;
