import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDcyNjgzODB9.e56IT7qpgvMsKEBwFHHA6QNP_s94_eNuj5I8HoqeBI4'

export const getProfile = (setForm) => {
    // const token = localStorage.getItem('token')
    axios
        .get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setForm({
                name: response.data.user.name,
                email: response.data.user.email,
                cpf: response.data.user.cpf
            })
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const getAdress = (setForm) => {
    // const token = localStorage.getItem('token')
    axios
        .get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setForm({
                street: response.data.address.street,
                number: response.data.address.number,
                neighbourhood: response.data.address.neighbourhood,
                city: response.data.address.city,
                state: response.data.address.state,
                complement: response.data.address.complement
            })
        })
        .catch((err) => {
            alert(err.message)
        })
}