import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
  grid-column-gap: 3rem;
  align-items: center;
`;

const Content = styled.section`
  height: 100%;
`;

const LeftContent = styled(Content)`
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
`;

function Left({ className, children }) {
  return <LeftContent className={className}>{children}</LeftContent>;
}

function Right({ className, children }) {
  return <section className={className}>{children}</section>;
}

function Splitter({ children }) {
  return <Container>{children}</Container>;
}

Splitter.Left = Left;
Splitter.Right = Right;

export default Splitter;
