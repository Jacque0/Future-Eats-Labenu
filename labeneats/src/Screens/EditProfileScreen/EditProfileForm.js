import React, { useEffect } from "react";
import { InputText, ButtonEddit } from "./StylesEditProfile";
import { useForm } from '../../hooks/useForm'
import { useNavigate } from "react-router";
import { putEditProfile } from "../../services/PutRequests";
import { getProfile } from "../../services/GetRequests";


export default function EditProfileForm() {
    const navigate = useNavigate()

    const { form, handleChange, clearForm, setForm } = useForm({
        name: "",
        email: "",
        cpf: ""
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        putEditProfile(form, clearForm, navigate);
    };

    useEffect(() => {
        getProfile(setForm)
    }, [])

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
