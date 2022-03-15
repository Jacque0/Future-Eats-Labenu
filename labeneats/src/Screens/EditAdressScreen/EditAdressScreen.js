import React from 'react';
import useProtectedPage from "../../hooks/useProtectedPage";
import AdressForm from "./AdressForm";
import { MainContainerAdressPage, Bar } from "./StyledAdressScreen";
import { goToProfile } from '../../routes/coordinator';
import Header from '../../components/Header/Header';


export default function EditAdressScreen() {
    // useProtectedPage()
    

    return (
        <MainContainerAdressPage>
            <Header goToScreen={goToProfile} />
            <h3>Meu endereço</h3>
            <AdressForm />
        </MainContainerAdressPage>
    )
}
