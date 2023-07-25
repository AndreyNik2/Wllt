import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Header = styled.header`
  display: block;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const Title = styled.h1`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Helvetica";
  font-size: 30px;
  padding: 0px;
  margin: 0px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const Logo = styled.img`
  margin-right: 10px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
