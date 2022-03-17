import React, { useState } from "react";
import { InputText, ButtonCreate, ContainerButton } from "./styleSingUp";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router";
import { goToEditAdress } from "../../routes/coordinator";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { postSignUp } from "../../services/initiation";

export default function SignUpForm() {
  const { form, handleChange, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [errorPassword, setErrorPassword] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();
  
  const onChangeConfirm = (event) => {
    if (event.target.value === form.password) {
      setErrorPassword(false);
      setHelperText("");
    } else {
      setErrorPassword(true);
      setHelperText("Deve ser a mesma que a anterior");
    }
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    postSignUp(form, clearForm, navigate);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputText
        required
        value={form.name}
        name="name"
        onChange={handleChange}
        label="Nome"
        placeholder="Nome e sobrenome"
        margin="dense"
      />
      <InputText
        required
        value={form.email}
        name="email"
        onChange={handleChange}
        label="E-mail"
        placeholder="email@email.com"
        margin="dense"
        type="email"
      />
      <InputText
        required
        value={form.cpf}
        name="cpf"
        onChange={handleChange}
        label="CPF"
        placeholder="000.000.000-00"
        margin="dense"
        inputProps={{
          inputMode: "numeric",
          pattern: "^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}",
        }}
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
          type={showPassword1 ? "text" : "password"}
          margin="dense"
          inputProps={{ pattern: "^.{6,}$" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword1}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        sx={{ marginTop: 1.1, marginBottom: 1.5 }}
        variant="outlined"
      >
        <InputLabel error={errorPassword} htmlFor="outlined-confirm-password">
          Confirmar *
        </InputLabel>
        <OutlinedInput
          id='outlined-confirm-password'
          required
          error={errorPassword}
          onChange={onChangeConfirm}
          label="Confirmar"
          placeholder="Confirme a senha anterior"
          type={showPassword2 ? "text" : "password"}
          margin="dense"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error>{helperText}</FormHelperText>
      </FormControl>
      <ButtonCreate type="submit" variant="contained">
        Criar
      </ButtonCreate>
    </form>
  );
}
