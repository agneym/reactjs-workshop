import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import * as S from "./layout";
import { PrimaryBtn } from "../btn";
import BreadCrumbs from "./breadcrumbs";

function Right({ className, stage, children, nextLink }) {
  const appear = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.4rem)", opacity: 0 },
    delay: 1000,
  });
  const AnimatedInsideRight = animated(S.InsideRight);
  return (
    <S.RightContent className={className}>
      <AnimatedInsideRight style={appear}>{children}</AnimatedInsideRight>
      <S.Footer>
        <S.FooterContent role="group">
          <BreadCrumbs till={stage} />
          {!!nextLink ? (
            <PrimaryBtn to={nextLink}>Next ⟶</PrimaryBtn>
          ) : (
            <PrimaryBtn to="/complete">Complete</PrimaryBtn>
          )}
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
