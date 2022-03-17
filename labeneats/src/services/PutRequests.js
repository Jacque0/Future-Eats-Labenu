import axios from "axios";
import { BASE_URL } from '../constants/BASE_URL';
import { goToHome, goToProfile } from "../routes/coordinator";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDcyNjgzODB9.e56IT7qpgvMsKEBwFHHA6QNP_s94_eNuj5I8HoqeBI4'

export const addAdress = (body, clearForm, navigate) => {
    // const token = localStorage.getItem('token')
    axios
        .put(`${BASE_URL}/address`, body, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clearForm()
            goToHome(navigate)
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const putEditProfile = (body, clearForm, navigate) => {
    // const token = localStorage.getItem('token')
    axios
        .put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }})
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clearForm()
            goToProfile(navigate)
        })
        .catch((err) => {
            alert(err.message)
        })
}