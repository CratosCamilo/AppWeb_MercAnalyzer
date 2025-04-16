import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATES } from "../constants/constans";
import { useAuth } from "../contexts";

export const useClearSession = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const onClearSession = () => {
        setLoading(true);

        setTimeout(() => {
            logout();
            setLoading(false);
            navigate(NAVIGATES.LOGIN);
        }, 2000);
    }

    return { onClearSession, loading };
};