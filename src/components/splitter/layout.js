import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 30% auto;
  min-height: 100vh;
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

export const RightContent = styled(Content)`
  height: 100vh;
  position: relative;
`;

export const InsideRight = styled.div`
  height: calc(100% - 6rem);
  padding: 1rem 2rem;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  height: 4rem;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  width: calc(100%);
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;
