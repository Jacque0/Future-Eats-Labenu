import axios from "axios";
import { BASE_URL } from '../constants/BASE_URL';
import { goToHome, goToProfile } from "../routes/coordinator";

export const addAdress = (body, clearForm, isData, navigate) => {
    const token = localStorage.getItem('token')
    axios
        .put(`${BASE_URL}/address`, body, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clearForm()
            isData?goToProfile(navigate):goToHome(navigate)
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const putEditProfile = (body, clearForm, navigate) => {
    const token = localStorage.getItem('token')
    axios
        .put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }})
        .then((res) => {
            clearForm()
            goToProfile(navigate)
        })
        .catch((err) => {
            alert(err.message)
        })
}