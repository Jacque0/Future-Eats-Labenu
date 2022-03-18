import styled from "styled-components";
import { Button } from "@mui/material";

export const ContainerQuantity = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  display: ${props=>(props.display?`flex`:`none`)};
  align-items: center;
  justify-content: center;
`;
export const Rectangle = styled.div`
  box-sizing: border-box;
  width: 328px;
  height: 216px;
  padding: 43px 16px 21px;
  background-color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonAdd = styled(Button)`
    align-self: flex-end;
`
