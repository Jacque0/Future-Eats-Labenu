import React, { useEffect, useState } from "react";
import {
  FormContainer,
  IntroContainer,
  LoginButton,
  LoginInput,
  PageContainer,
} from "./styledLoginScreen";
import whiteLogo from "../../assets/white-logo.png";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";
import { goToEditAdress, goToHome } from "../../routes/coordinator";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../assets/Loading";
import MessageBox from "../../components/messageBox";
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

export default function LoginScreen() {
  useUnprotectedPage()

  const { form, handleChange, clearForm } = useForm({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(BASE_URL + "/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clearForm();
        res.data.user.hasAddress
          ? goToHome(navigate)
          : goToEditAdress(navigate);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
        clearForm();
      });
  };

  useEffect(() => {
    setTimeout(() => localStorage.getItem("token") && goToHome(navigate), 4000);
  }, []);

  const renderPage = (
    <PageContainer>
      <img className="logo" src={logo} alt="logo" />
      <span className="text">Entrar</span>
      <FormContainer type="submit" onSubmit={handleLogin}>
        <LoginInput
          required
          autoFocus
          error={false}
          value={form.email}
          placeholder="E-mail de cadastro"
          type="email"
          name="email"
          onChange={handleChange}
          label="E-mail"
          margin="dense"
        />
        <FormControl sx={{ marginTop: 1.1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            value={form.password}
            name="password"
            onChange={handleChange}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type={showPassword === "text" ? "text" : "password"}
            margin="dense"
            inputProps={{ pattern: "^.{6,}$" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    showPassword === "text"
                      ? setShowPassword("password")
                      : setShowPassword("text")
                  }
                  edge="end"
                >
                  {showPassword === "text" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <span className="space" />

        <LoginButton type="submit" variant="contained">
          {isLoading ? <Loading /> : "Enviar"}
        </LoginButton>
      </FormContainer>
      <span className="text">
        Não possui cadastro? <Link to="/signup">Clique aqui</Link>
      </span>
    </PageContainer>
  );

  return (
    <>
      <IntroContainer>
        <img src={whiteLogo} alt="logo" />
      </IntroContainer>

      {localStorage.getItem("token") ? <></> : renderPage}
      {error && (
        <MessageBox
          severity={"error"}
          title={"Algo deu errado"}
          message={error}
        />
      )}
    </>
  );
}
