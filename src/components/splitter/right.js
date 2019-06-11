import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import * as S from "./layout";

function Right({ className, path, children }) {
  const appear = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.4rem)", opacity: 0 },
    delay: 1000,
  });
  return (
    <S.RightContent className={className}>
      <animated.div style={appear}>{children}</animated.div>
      <S.Footer>
        <S.FooterContent role="group">
          <p></p>
          <button>Next</button>
        </S.FooterContent>
      </S.Footer>
    </S.RightContent>
  );
}

Right.propTypes = {
  className: PropTypes.string,
  path: PropTypes.arrayOf(PropTypes.string),
};

export default Right;
