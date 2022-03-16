import React, {useState} from 'react'
import homeGreen from '../../assets/homeGreen.svg'
import homeGray from '../../assets/homeGray.svg'
import profileGreen from '../../assets/profileGreen.svg'
import profileGray from '../../assets/profileGray.svg'
import cartGreen from '../../assets/cartGreen.svg'
import cartGray from '../../assets/cartGray.svg'
import { ButtonFooter, ContainerFooter } from './styleFooter';

export default function Footer() {
    const [page, setPage] = useState('home')
  return (
    <ContainerFooter>
        <ButtonFooter>{page==='home'?<img src={homeGreen} />:<img src={homeGray} />}</ButtonFooter>
        <ButtonFooter>{page==='cart'?<img src={cartGreen} />:<img src={cartGray} />}</ButtonFooter>
        <ButtonFooter>{page==='profile'?<img src={profileGreen} />:<img src={profileGray} />}</ButtonFooter>
    </ContainerFooter>
  )
}
