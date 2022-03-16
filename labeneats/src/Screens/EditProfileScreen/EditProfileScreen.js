import React from 'react';
import EditProfileForm from './EditProfileForm';
import Header from '../../components/Header/Header';
import { ContainerEditProfile } from './StylesEditProfile';

export default function EditProfileScreen() {
  return (
    <ContainerEditProfile>
      <Header backButton={true} title={'Editar'} />
      <EditProfileForm />
    </ContainerEditProfile>
  )
}
