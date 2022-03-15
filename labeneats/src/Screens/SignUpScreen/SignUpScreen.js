import React from "react";
import { Bar, ContainerSingUp, Title } from "./styleSingUp";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function SignUpScreen() {
  // useUnprotectedPage();
  
  return (
    <ContainerSingUp>
      <Bar>
        <IconButton
          color="secondary"
          className="back"
          aria-label="botão de voltar"
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Bar>
      <img src={logo} alt={"logo"} className="logo" />
      <Title>
        <p className="Text">Cadastrar</p>
      </Title>
      <SignUpForm />
    </ContainerSingUp>
  );
}
