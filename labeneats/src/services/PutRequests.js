import axios from "axios";
import { BASE_URL } from '../constants/BASE_URL';
import { goToHome, goToProfile } from "../routes/coordinator";

export const addAdress = (body, clearForm, hasAddress, navigate, setError) => {
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
            hasAddress ? goToProfile(navigate) : goToHome(navigate)
        })
        .catch((err) => {
            setError(err.response.data.message)
        })
}


export const putEditProfile = (body, clearForm, navigate, setError) => {
    const token = localStorage.getItem('token')
    axios
        .put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            clearForm()
            goToProfile(navigate)
        })
        .catch((err) => {
            setError(err.response.data.message)
        })
}