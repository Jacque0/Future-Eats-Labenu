import React from 'react';
import EditProfileForm from './EditProfileForm';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import { ContainerEditProfile } from './StylesEditProfile';

export default function EditProfileScreen() {
  useProtectedPage()

  return (
    <ContainerEditProfile>
      <Header backButton={true} title={'Editar'} />
      <EditProfileForm />
    </ContainerEditProfile>
  )
}
