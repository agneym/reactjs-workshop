import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Title = styled.h1`
  font-size: 2rem;
`;

const Subtitle = styled.sub`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.2rem;
  font-size: 1rem;
`;

function Heading({ title, subtitle }) {
  const appear = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.6rem)", opacity: 0 },
    delay: 500,
  });
  const appearAfter = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-0.5rem)", opacity: 0 },
    delay: 1000,
  });
  const AnimatedTitle = animated(Title);
  const AnimatedSubtitle = animated(Subtitle);
  return (
    <Fragment>
      <AnimatedTitle style={appear}>{title}</AnimatedTitle>
      <AnimatedSubtitle style={appearAfter}>{subtitle}</AnimatedSubtitle>
    </Fragment>
  );
}

Heading.defaultProps = {
  subtitle: "",
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
