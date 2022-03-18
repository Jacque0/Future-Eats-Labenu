import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL';
import { goToEditAdress } from '../routes/coordinator';



export const postSignUp = (body, clearForm, navigate, setError) => {
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
        setError(err.response.data.message);
      });
  };