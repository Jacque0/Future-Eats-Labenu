import { Button, TextField } from "@mui/material"
import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  animation: waitOpen 4s ease forwards;
  overflow: hidden;
  .logo {
    width: 104px;
    height: 58px;
    margin: 68px 128px 0px;
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    margin: 16px 0 0;
    padding: 12px 32px;
  }
  @keyframes waitOpen {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    90% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 100;
      visibility: visible;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
  animation: openApp 4s ease forwards;
  img {
    width: 126px;
    height: 65px;
    object-fit: contain;
    animation: loading 4s ease-in-out infinite;
    @keyframes loading {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.07);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.07);
      }
      90% {
        transform: scale(1);
      }
      100%{
        transform: scale(4);
      }
    }
  }
  @keyframes openApp {
    0% {
      opacity: 100;
      visibility: visible;
    }
    90% {
      opacity: 100;
      visibility: visible;
      display: flex;
    }
    99% {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
    100% {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
`

export const LoginButton = styled(Button)`
  width: 328px;
  max-width: 85vw;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  margin: 20px 0 0;
`

export const LoginInput = styled(TextField)`
  width: 328px;
  max-width: 85vw;
  height: 56px;
  margin: 16px;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`
