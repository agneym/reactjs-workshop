import { Link } from "gatsby";
import styled from "styled-components";

const Btn = styled(Link)`
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  border-radius: 1.5rem;
  background-color: transparent;
  cursor: pointer;
`;

export const PrimaryBtn = styled(Btn)`
  border: 0.1rem solid ${props => props.theme.colors.secondary};
  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
  }
`;

export const SecondaryBtn = styled(Btn)`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
`;
