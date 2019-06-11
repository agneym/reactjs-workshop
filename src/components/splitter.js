import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled.main`
  display: grid;
  grid-template-columns: 30% auto;
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
  transform-origin: left top;
`;

const RightContent = styled(Content)``;

function Left({ className, children }) {
  return <LeftContent className={className}>{children}</LeftContent>;
}

function Right({ className, children }) {
  const appear = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.4rem)", opacity: 0 },
    delay: 1000,
  });
  const AnimatedRightContent = animated(RightContent);
  return (
    <AnimatedRightContent className={className} style={appear}>
      {children}
    </AnimatedRightContent>
  );
}

function Splitter({ children }) {
  return <Container>{children}</Container>;
}

Splitter.Left = Left;
Splitter.Right = Right;

export default Splitter;
