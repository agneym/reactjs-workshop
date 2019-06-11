import React from "react";
import { useSpring, animated } from "react-spring";

import * as S from "./layout";

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

export default Right;
