import styled from "styled-components"

const GetStartedBtn = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  margin-top: 1rem;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.secondary};
    transform-origin: center top;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    transform-origin: center bottom;
    transform: scaleY(1);
  }
`

export default GetStartedBtn
