import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
`;

const Subtitle = styled.sub`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.2rem;
  font-size: 1rem;
`;

function Heading({ title, subtitle }) {
  return (
    <Fragment>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
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
