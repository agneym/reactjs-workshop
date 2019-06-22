import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/feedback/header";
import Form from "../components/feedback/form";
import SEO from "../components/seo";

const Container = styled.main`
  width: 60%;
  margin: 0 auto;
`;

function Feedback() {
  return (
    <Layout>
      <SEO title="Feedback" />
      <Container>
        <Header />
        <Form />
      </Container>
    </Layout>
  );
}

export default Feedback;
