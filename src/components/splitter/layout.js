import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 30% auto;
  min-height: 100vh;
  grid-column-gap: 3rem;
  align-items: center;
`;

export const Content = styled.section`
  height: 100%;
`;

export const LeftContent = styled(Content)`
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  transform-origin: left top;
`;

export const RightContent = styled(Content)``;
