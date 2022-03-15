import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToHome(navigate)
        }
    }, [navigate])
}
export default useUnprotectedPage
