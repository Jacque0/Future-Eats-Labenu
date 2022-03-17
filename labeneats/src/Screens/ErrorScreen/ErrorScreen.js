import React from 'react';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { MainContainerErrorScreen, TextBox, Logo } from './StylesErrorScreen'
import Header from '../../components/Header/Header';
import logo from '../../assets/logo.png'


export default function ErrorScreen() {
  useUnprotectedPage()

  return (
    <MainContainerErrorScreen>
      <Header backButton={true} />
      <Logo src={logo} alt="Logo Future Eats" />
      <TextBox>
        <h1>Eita, esta página não existe</h1>
        <h3>Verifique se o endereço está correto. <br />
          Talvez a página não esteja mais disponível</h3>
      </TextBox>
    </MainContainerErrorScreen>
  )
}
