// useAuthenticateUser.ts
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { useShowUserMessage } from "../hooks";

export const useAuthenticateUser = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        if (email === "andres" && password === "123") {
            login();
            navigate("/search");
        }
        else {
            useShowUserMessage({
                icon: "error",
                title: "Intente de nuevo",
                message: "Usuario o contraseña incorrectos."
            });
        }
    };

    return onSubmitLogin;
};
