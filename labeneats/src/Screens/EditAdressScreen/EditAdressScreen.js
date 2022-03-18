import React from 'react';
import useProtectedPage from "../../hooks/useProtectedPage";
import AdressForm from "./AdressForm";
import { MainContainerAdressPage, Bar } from "./StyledAdressScreen";
import Header from '../../components/Header/Header';


export default function EditAdressScreen() {
    useProtectedPage()
    
    return (
        <MainContainerAdressPage>
            <Header backButton={true}  />
            <h3>Meu endereço</h3>
            <AdressForm />
        </MainContainerAdressPage>
    )
}
