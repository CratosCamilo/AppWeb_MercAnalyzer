import { NavBarLoginProps } from "types/props";
import { iconApp } from "../../assets";

export const NavBarLogin = ({ isLoginVisible, isRegisterVisible, setIsLoginVisible, setIsRegisterVisible }: NavBarLoginProps) => {
    const toggleLogin = () => {
        setIsRegisterVisible(false);
        setIsLoginVisible(!isLoginVisible);
    };

    const toggleRegister = () => {
        setIsLoginVisible(false);
        setIsRegisterVisible(!isRegisterVisible);
    };

    return (
        <nav className="navbar">
            <div className="app-title">
                <img className="icon-app" alt="logo" src={iconApp} />
                <h1 className="title">MercAnalyzer</h1>
            </div>
            <button
                className={`${isLoginVisible ? "selected" : ""} button-login`}
                onClick={toggleLogin}
            >
                Iniciar sesión
            </button>
            <button
                className={`${isRegisterVisible ? "selected" : ""} button-register`}
                onClick={toggleRegister}
            >
                Regístrese
            </button>
        </nav>
    );
}