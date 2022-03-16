import styled from "styled-components";
import { Button, TextField } from '@mui/material';

export const MainContainerAdressPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3{
      font-weight: normal;
      margin: 16px 0 0;
      padding: 12px 32px;
  }
`

export const MainContainerFormAdress = styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 65vh;
  }
`

export const ButtonAdressForm = styled(Button)`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
`

export const InputsAdressForm = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`