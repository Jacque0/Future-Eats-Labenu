import React from "react";
import { ContainerSingUp, Title } from "./styleSingUp";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import Header from '../../components/Header/Header'

export default function SignUpScreen() {
  // useUnprotectedPage();
  
  return (
    <ContainerSingUp>
      <Header backButton={true} />
      <img src={logo} alt={"logo"} className="logo" />
      <Title>
        <p className="Text">Cadastrar</p>
      </Title>
      <SignUpForm />
    </ContainerSingUp>
  );
}
