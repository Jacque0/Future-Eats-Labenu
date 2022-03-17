import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL';
import { goToEditAdress } from '../routes/coordinator';

//Inserir a integração de login aqui

export const postSignUp = (body, clearForm, navigate) => {
    axios
      .post(
        `${BASE_URL}/signup`,
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clearForm();
        goToEditAdress(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };