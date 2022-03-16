import React from "react";
import { InputText, ButtonCreate } from "./styleSingUp";
import {useForm} from '../../hooks/useForm'
import { useNavigate } from "react-router";
import { goToEditAdress } from "../../routes/coordinator";
import axios from "axios";

export default function SignUpForm() {
  const { form, handleChange, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate()

  const postSignUp = (body) =>{
    axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                clearForm()
                goToEditAdress(navigate)
            })
            .catch((err) => {
                console.log(err.response)
                alert(err.response.data.message)
            })
    
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    postSignUp(form);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputText
        required
        value={form.name}
        name='name'
        onChange={handleChange}
        label="Nome"
        placeholder="Nome e sobrenome"
        margin="dense"
      />
      <InputText
        required
        value={form.email}
        name='email'
        onChange={handleChange}
        label="E-mail"
        placeholder="email@email.com"
        margin="dense"
        type='email'
      />
      <InputText
        required
        value={form.cpf}
        name='cpf'
        onChange={handleChange}
        label="CPF"
        placeholder="000.000.000-00"
        margin="dense"
        inputProps={{ inputMode: 'numeric', pattern: "^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" }}
      />
      <InputText
        required
        value={form.password}
        name='password'
        onChange={handleChange}
        label="Senha"
        placeholder="Mínimo 6 caracteres"
        type="password"
        margin="dense"
      />
      <InputText
        required
        label="Confirmar"
        placeholder="Confirme a senha anterior"
        type="password"
        margin="dense"
      />
      <ButtonCreate type="submit" variant="contained">Criar</ButtonCreate>
    </form>
  );
}
