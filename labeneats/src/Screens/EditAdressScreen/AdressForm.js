import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import { MainContainerFormAdress, ButtonAdressForm, InputsAdressForm } from "./StyledAdressScreen";
import { addAdress } from "../../services/PutRequests";
import { getAdress } from "../../services/GetRequests";
import { BASE_URL } from "../../constants/BASE_URL";
import { useRequestData } from "../../hooks/useRequestData";
import MessageBox from "../../components/messageBox";
import ConfirmBox from "../../components/ConfirmBox";

const AdressForm = () => {
    const navigate = useNavigate();
    const data = useRequestData({}, `${BASE_URL}/profile`)
    const hasAddress = data.data.user?data.data.user.hasAddress:true

    const { form, handleChange, clearForm, setForm } = useForm(
        {
            street: '',
            number: '',
            neighbourhood: '',
            city: '',
            state: '',
            complement: '',
        });

    const onSubmitForm = (event) => {
        event.preventDefault()
        addAdress(form, clearForm, hasAddress, navigate);
    }

    useEffect(() => {
        getAdress(setForm)
    }, [])

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
                    margin="dense"
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
                    margin="dense"
                    required
                />

                <InputsAdressForm
                    value={form.complement}
                    type="text"
                    name='complement'
                    label='Complemento'
                    placeholder='Apto./Bloco'
                    variant='outlined'
                    margin="dense"
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
                    margin="dense"
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
                    margin="dense"
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
                    margin="dense"
                    required
                />

                <ButtonAdressForm color='primary' variant="contained" type="submit">
                    Salvar
                </ButtonAdressForm>
            </form>
            <ConfirmBox>
                LeroLero
            </ConfirmBox>
            {/* {!hasAddress &&
                <MessageBox
                    severity={'error'}
                    title={'Informação'}
                    message={`É necessário informar seu endereço para usufruir corretamente \
                    do Future Eats. Você pode editar seus dados em seu perfil a qualquer momento.`} />} */}
        </MainContainerFormAdress>
    )
}

export default AdressForm;
