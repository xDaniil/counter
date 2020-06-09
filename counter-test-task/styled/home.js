import styled from "styled-components";

export const Top = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  font-family: Arial;
  font-size: 72px;
  align-items: center;
`

export const Middle = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 80 px;
  justify-content: space-between;
  width: 700px;
`;

export const Button = styled.a`
  background: #4293f5;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: Arial;
  font-weight: 700;
  font-size: 25px;
  color: #fafafa;
  letter-spacing: 0;
  width: 100px;
  cursor: pointer;
`;
