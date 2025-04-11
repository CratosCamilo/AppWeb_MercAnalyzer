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

export interface LoginFormProps {
    isLoginVisible: boolean;
}

export interface RegisterFormProps {
    isRegisterVisible: boolean;
}

export interface NavBarLoginProps {
    isLoginVisible: boolean;
    isRegisterVisible: boolean;
    setIsLoginVisible: (isLoginVisible: boolean) => void;
    setIsRegisterVisible: (isRegisterVisible: boolean) => void;
}