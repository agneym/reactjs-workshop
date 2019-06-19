import React from "react";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";

function ReactPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Heading title="React" subtitle="THE Framework" />
        </Splitter.Left>
        <Splitter.Right stage={4}>
          <p>Right Content</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  );
}

export default ReactPage;
