import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { useShowUserMessage } from "./useShowUserMessage";

export const useRegisterUser = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.password.value;

        if (email === "andres" && password === "123") {
            login();
            navigate("/search");
        }
        else {
            useShowUserMessage({
                icon: "error",
                title: "Intente de nuevo",
                message: "El correo ingresado ya se encuentra registrado."
            });
        }
    };

    return onSubmitRegister;
}