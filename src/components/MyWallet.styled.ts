import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  margin: 0 auto;
  height: 50px;
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const MyWalletContainer = styled.div`
  
`;

export const WalletTextTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
`;

export const WalletText = styled.p`
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
`;
