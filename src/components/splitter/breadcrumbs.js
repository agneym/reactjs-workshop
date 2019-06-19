import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const stages = [
  { name: "Home", url: "/" },
  { name: "HTML", url: "/html" },
  { name: "CSS", url: "/css" },
  { name: "JS", url: "/js" },
];

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};

  &:hover {
    text-decoration: underline;
  }
`;

function Breadcrumbs() {
  return (
    <nav>
      {stages.map((stage, index) => (
        <span>
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

export default Breadcrumbs;
