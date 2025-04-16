import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { isEmptyStrings } from "../helpers";
import { useShowUserMessage } from "../hooks";

export const useRegisterUser = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.passwordConfirm.value;

        if (isEmptyStrings([email, password, confirmPassword])) {
            useShowUserMessage({
                icon: "info",
                title: "Información incompleta",
                message: "Para poder continuar ingrese información en los campos."
            });
            return;
        }

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