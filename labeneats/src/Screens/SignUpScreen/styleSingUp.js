import styled from "styled-components";
import { primaryColors } from "../../constants/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContainerSingUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 104px;
    height: 58px;
    margin: 24px 128px 16px;
    object-fit: contain;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 42px;
  padding: 12px 0;
  .Text {
    width: 100%;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${primaryColors.black};
  }
`;

export const InputText = styled(TextField)`
  width: 328px;
  max-width: 85vw;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

export const ButtonCreate = styled(Button)`
  width: 328px;
  max-width: 85vw;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  padding-top: 16px;
`
