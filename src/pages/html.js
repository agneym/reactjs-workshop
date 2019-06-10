import React from "react";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";

function HTMLPage() {
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Heading title="HTML" subtitle="Hyper Text Markup Language" />
        </Splitter.Left>
        <Splitter.Right>
          <p>Right</p>
        </Splitter.Right>
      </Splitter>
    </Layout>
  );
}

export default HTMLPage;
