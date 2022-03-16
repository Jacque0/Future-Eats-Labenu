import React, { useState } from "react";
import {useRequestData} from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';
import { InputText, ButtonEddit } from "./StylesEditProfile";
import { useForm } from '../../hooks/useForm'
import { useNavigate } from "react-router";
import { goToProfile } from "../../routes/coordinator";
import axios from "axios";

export default function EditProfileForm() {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDcyNjgzODB9.e56IT7qpgvMsKEBwFHHA6QNP_s94_eNuj5I8HoqeBI4'
    // const {data} = useRequestData([],`${BASE_URL}/profile`,{headers: {auth: token}})

    
    const { form, handleChange, clearForm } = useForm({
        name:  "",
        email:  "",
        cpf: "",
    });

    const navigate = useNavigate()

    const putEditProfile = (body) => {
        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                clearForm()
                goToProfile(navigate)
            })
            .catch((err) => {
                console.log(err.response)
                alert(err.response.data.message)
            })
    }



    const onSubmitForm = (event) => {
        event.preventDefault();
        putEditProfile(form);
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
            <ButtonEddit type="submit" variant="contained">Salvar</ButtonEddit>
        </form>
    );
}
