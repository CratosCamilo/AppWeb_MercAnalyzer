import { useState } from "react";
import { isEmptyStrings } from "../helpers";
import { useShowUserMessage } from "../hooks";

export const useRegisterUser = () => {
    const [loading, setLoading] = useState(false);

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

        if (password !== confirmPassword) {
            useShowUserMessage({
                icon: "info",
                title: "Verifique su contraseña",
                message: "Las contraseñas ingresadas no coinciden."
            });
            return;
        }

        // Simulate loading.
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return { onSubmitRegister, loading };
}