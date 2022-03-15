import axios from "axios";
import React from "react";
import { BASE_URL } from '../../constants/BASE_URL';
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import { MainContainerFormAdress, ButtonAdressForm, InputsAdressForm } from "./StyledAdressScreen";
import { goToHome } from "../../routes/coordinator";

const AdressForm = () => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDcyNjgzODB9.e56IT7qpgvMsKEBwFHHA6QNP_s94_eNuj5I8HoqeBI4'
    const navigate = useNavigate()
    const { form, handleChange, clearForm } = useForm(
        {
            street: '',
            number: '',
            neighbourhood: '',
            city: '',
            state: '',
            complement: ''
        })

    const onSubmitForm = (event) => {
        event.preventDefault()
        addAdress(form, clearForm, token, navigate)
    }

    // Início do código a ser alocado na pasta 'Serviços' quando for criada//
    const addAdress = (body, clearForm, token, navigate) => {
        axios
            .put(`${BASE_URL}/address`, body, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                clearForm()
                goToHome(navigate)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    // Fim do código a ser alocado na pasta 'Serviços'//



    return (
        <MainContainerFormAdress>
            <form onSubmit={onSubmitForm}>
                <InputsAdressForm
                    value={form.street}
                    type='text'
                    name='street'
                    label='Logradouro'
                    placeholder="Rua/Avenida"
                    variant='outlined'
                    onChange={handleChange}
                    required
                />

                <InputsAdressForm
                    value={form.number}
                    type='number'
                    name='number'
                    label='Número'
                    placeholder='Número'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />

                <InputsAdressForm
                    value={form.complement}
                    type="text"
                    name='complement'
                    label='Complemento'
                    placeholder='Apto./Bloco'
                    variant='outlined'
                    onChange={handleChange}
                />

                <InputsAdressForm
                    value={form.neighbourhood}
                    type='text'
                    name='neighbourhood'
                    label='Bairro'
                    placeholder='Bairro'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />

                <InputsAdressForm
                    value={form.city}
                    type='text'
                    name='city'
                    label='Cidade'
                    placeholder='Cidade'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />

                <InputsAdressForm
                    value={form.state}
                    type='text'
                    name='state'
                    label='Estado'
                    placeholder='Estado'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />

                <ButtonAdressForm color='primary' variant="contained" type="submit">
                    Salvar
                </ButtonAdressForm>

            </form>
        </MainContainerFormAdress>
    )
}

export default AdressForm;
