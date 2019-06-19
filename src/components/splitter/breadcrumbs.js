import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const stages = [
  { name: "Home", url: "/" },
  { name: "HTML", url: "/html" },
  { name: "CSS", url: "/css" },
  { name: "JS", url: "/js" },
  { name: "React", url: "/react" },
];

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};

  &:hover {
    text-decoration: underline;
  }
`;

function Breadcrumbs({ till }) {
  const reachedStages = stages.slice(0, till);
  return (
    <nav>
      {reachedStages.map((stage, index) => (
        <span key={stage.url}>
          {!!index && (
            <span
              css={`
                color: rgba(0, 0, 0, 0.4);
              `}
            >
              {" "}
              >{" "}
            </span>
          )}
          <StyledLink to={stage.url}>{stage.name}</StyledLink>
        </span>
      ))}
    </nav>
  );
}

Breadcrumbs.defaultProps = {
  till: 0,
};

Breadcrumbs.propTypes = {
  till: PropTypes.number,
};

export default Breadcrumbs;
