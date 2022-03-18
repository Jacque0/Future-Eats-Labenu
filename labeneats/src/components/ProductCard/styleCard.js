import styled from "styled-components";
import { Button } from "@mui/material";

export const CardContainer = styled.div`
  width: 328px;
  max-width: 100%;
  height: 112px;
  box-sizing: border-box;
  margin: 7px 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  font-size: 16px;
  letter-spacing: -0.39px;
  position: relative;
  .quantity {
    width: 33px;
    height: 33px;
    box-sizing: border-box;
    padding: 7px 12px;
    color: #5cb646;
    text-align: center;
    z-index: 1;
    border-radius: 0 8px 0 8px;
    border: solid 1px #5cb646;
    position: absolute;
    right: 0;
  }
`;

export const Img = styled.img`
  width: 96px;
  height: 100%;
  margin: 0 16px 0 0;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;

export const ButtonArea = styled.div`
  width: 90px;
  height: 31px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ButtonAdd = styled(Button)`
  width: 90px;
  height: 31px;
  font-size: 16px;
  border-radius: 8px 0 8px 0;
`;
