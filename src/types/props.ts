import { ReactNode } from "react";

export interface AuthContextProps {
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface RequireAuthProps {
    children: ReactNode;
}