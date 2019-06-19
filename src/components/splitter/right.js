import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import * as S from "./layout";
import NextBtn from "./next-btn";

function Right({ className, path, children, nextLink }) {
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
          {!!nextLink && <NextBtn to={nextLink}>Next ⟶</NextBtn>}
        </S.FooterContent>
      </S.Footer>
    </S.RightContent>
  );
}

Right.defaultProps = {
  nextLink: null,
};

Right.propTypes = {
  className: PropTypes.string,
  path: PropTypes.arrayOf(PropTypes.string),
  nextLink: PropTypes.string,
};

export default Right;
