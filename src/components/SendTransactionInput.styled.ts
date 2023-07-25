import styled from "styled-components";

export const TransactionContainer = styled.div`
margin-top: 55px;
`;

export const Form = styled.form`

`;

export const Input = styled.input`
  display: block;
  width: calc(100% - 20px);
  height: 40px;
  border-radius: 8px;
  padding-left: 20px;
  outline: none;

  &:nth-child(2) {
    margin-top: 20px;
  }
  &:focus {
    border-color: #d29718;
    outline: #d29718;
  }
`;

export const TransactionButton = styled.button`
width: 100%;
margin-top: 20px;
`;

export const SuccessContainer = styled.div`

`;

export const SuccessText = styled.p`
  color: #d29718;
`;

export const HashText = styled.p`
  font-size: 9px;
  color: #d29718;
`;