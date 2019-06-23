import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Splitter from "../components/splitter";
import Heading from "../components/heading";
import SEO from "../components/seo";

const Content = styled.div`
  a {
    color: ${props => props.theme.colors.link};
  }
`;

function Language({ data, pageContext }) {
  const post = data.markdownRemark;
  const { next } = pageContext;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Splitter>
        <Splitter.Left>
          <Heading
            title={post.frontmatter.title}
            subtitle={post.frontmatter.subtitle}
          />
        </Splitter.Left>
        <Splitter.Right
          nextLink={!!next ? next.frontmatter.slug : null}
          stage={post.frontmatter.stage}
        >
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
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
