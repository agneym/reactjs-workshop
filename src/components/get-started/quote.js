import React from "react";
import styled from "styled-components";

const Line = styled.p`
  margin: 0;
`;

function Quote() {
  return (
    <blockquote
      css={`
        margin: 4rem 0;
        font-style: italic;
        border-left: 0.2rem solid #000;
        padding-left: 1rem;
      `}
    >
      <Line>Any fool can write code that a computer can understand.</Line>
      <Line>Good programmers write code that humans can understand.</Line>
      <Line
        css={`
          text-align: right;
          font-size: smaller;
          margin-top: 0.4rem;
        `}
      >
        - Martin Fowler
      </Line>
    </blockquote>
  );
}

export default Quote;
