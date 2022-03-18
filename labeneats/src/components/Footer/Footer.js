import React, {useState} from 'react'
import homeGreen from '../../assets/homeGreen.svg'
import homeGray from '../../assets/homeGray.svg'
import profileGreen from '../../assets/profileGreen.svg'
import profileGray from '../../assets/profileGray.svg'
import cartGreen from '../../assets/cartGreen.svg'
import cartGray from '../../assets/cartGray.svg'
import { ButtonFooter, ContainerFooter } from './styleFooter';
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToCart, goToProfile } from '../../routes/coordinator'

export default function Footer() {
    let urlPage = ""  

    let url = window.location.href
    url = url.split("3000/")

    const navigate = useNavigate()
    
     if (url[1] === "") {
      urlPage = "home"
    } else if (url[1] === "profile") {
      urlPage = "profile"
    }  else if (url[1] === "cart") {
      urlPage = "cart"
    }

    const [page, setPage] = useState(urlPage)
    

    const changeToHome = () => {
      goToHome(navigate)
      setPage("home")
      
    }

    const changeToCart = () => {
      goToCart(navigate)
      setPage("cart")
      
    }

    const changeToProfile = () => {
      goToProfile(navigate)
      setPage("profile")
      
    }

  return (
    <ContainerFooter>
        <ButtonFooter onClick={changeToHome}>{page==='home'?<img src={homeGreen} />:<img src={homeGray} />}</ButtonFooter>
        <ButtonFooter onClick={changeToCart}>{page==='cart'?<img src={cartGreen} />:<img src={cartGray} />}</ButtonFooter>
        <ButtonFooter onClick={changeToProfile}>{page==='profile'?<img src={profileGreen} />:<img src={profileGray} />}</ButtonFooter>
    </ContainerFooter>
  )
}
