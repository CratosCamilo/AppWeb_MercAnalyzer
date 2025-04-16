// useAuthenticateUser.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATES } from "../constants/constans";
import { useAuth } from "../contexts";
import { isEmptyStrings } from "../helpers";
import { useShowUserMessage } from "../hooks";

export const useAuthenticateUser = () => {
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        if (isEmptyStrings([email, password])) {
            useShowUserMessage({
                icon: "info",
                title: "Información incompleta",
                message: "Para poder continuar ingrese su correo y contraseña."
            });
            return;
        }

        // Simalate loading.
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (email === "andres" && password === "123") {
                login();
                navigate(NAVIGATES.SEARCH);
            }
            else {
                useShowUserMessage({
                    icon: "error",
                    title: "Intente de nuevo",
                    message: "Usuario o contraseña incorrectos."
                });
            }
        }, 2000);
    };

    return { onSubmitLogin, loading };
};
