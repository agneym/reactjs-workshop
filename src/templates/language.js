import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";

function Language({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Splitter>
        <Splitter.Left>
          <Heading
            title={post.frontmatter.title}
            subtitle={post.frontmatter.subtitle}
          />
        </Splitter.Left>
        <Splitter.Right nextLink="/css" stage={post.frontmatter.stage}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Splitter.Right>
      </Splitter>
    </Layout>
  );
}

export default Language;

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        subtitle
        stage
      }
    }
  }
`;
