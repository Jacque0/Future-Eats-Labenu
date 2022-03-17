import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const getProfile = (setForm) => {
    const token = localStorage.getItem('token')
    axios
        .get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setForm({
                name: response.data.user?response.data.user.name:"",
                email: response.data.user?response.data.user.email:"",
                cpf: response.data.user?response.data.user.cpf:"",
            })
        })
        .catch((err) => {
        })
}


export const getAdress = (setForm, setIsData) => {
    const token = localStorage.getItem('token')
    axios
        .get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setForm({
                street: response.data.address?response.data.address.street:"",
                number: response.data.address?response.data.address.number:"",
                neighbourhood: response.data.address?response.data.address.neighbourhood:"",
                city: response.data.address?response.data.address.city:"",
                state: response.data.address?response.data.address.state:"",
                complement: response.data.address?response.data.address.complement:"",
            })
            response.data.address&&setIsData(true)
        })
        .catch((err) => {
        })
}