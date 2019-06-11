import React from "react";
import * as S from "styled-components";
import { useSpring, animated } from "react-spring";

function Left({ className, children }) {
  return <S.LeftContent className={className}>{children}</S.LeftContent>;
}

function Right({ className, children }) {
  const appear = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.4rem)", opacity: 0 },
    delay: 1000,
  });
  const AnimatedRightContent = animated(S.RightContent);
  return (
    <AnimatedRightContent className={className} style={appear}>
      {children}
    </AnimatedRightContent>
  );
}

function Splitter({ children }) {
  return <S.Container>{children}</S.Container>;
}

Splitter.Left = Left;
Splitter.Right = Right;

export default Splitter;
