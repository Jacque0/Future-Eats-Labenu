import React from 'react';
import useProtectedPage from "../../hooks/useProtectedPage";
import AdressForm from "./AdressForm";
import backIcon from '../../assets/BackIcon.svg';
import { MainContainerAdressPage } from "./StyledAdressScreen";
import { goToProfile } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function EditAdressScreen() {
    // useProtectedPage()
    const navigate = useNavigate();

    return (
        <MainContainerAdressPage>
            <div className="Bar">
                <img src={backIcon} alt='Botão voltar' onClick={() => goToProfile(navigate)}/>
            </div>
            <h3>Meu endereço</h3>
            <AdressForm />
        </MainContainerAdressPage>
    )
}
