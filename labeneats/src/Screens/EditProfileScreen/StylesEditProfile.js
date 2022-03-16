import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContainerEditProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  form {
    display: flex;
    flex-direction: column;
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

export const ButtonEddit = styled(Button)`
  width: 328px;
  max-width: 85vw;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  margin: 8px 0 0;
`;
