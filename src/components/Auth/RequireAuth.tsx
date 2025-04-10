import { Navigate } from "react-router-dom";
import { RequireAuthProps } from "types/props";
import { useAuth } from "../../contexts";

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const { authenticated } = useAuth();
    return authenticated ? children : <Navigate to="/login" />;
}