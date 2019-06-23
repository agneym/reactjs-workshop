import styled from "styled-components";

const Content = styled.div`
  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:visited {
      opacity: 0.8;
    }
  }

  li {
    margin: 0.5rem 0;
  }
`;

export default Content;
