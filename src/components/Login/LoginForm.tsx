import { useState } from "react";
import { LoginFormProps } from "types/props";
import { iconGoogle } from "../../assets";

export const LoginForm = ({ isLoginVisible }: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={`login-form ${isLoginVisible ? "show" : ""}`}>
            <form className="form">
                <h2 className="title-form">Iniciar sesión</h2>
                <div className="input-container">
                    <label htmlFor="username" className="label-input">Correo:</label>
                    <input type="text" id="username" name="username" className="input-field" />
                    <div className="icon-mail"></div>
                </div>
                <div className="input-container">
                    <label htmlFor="password" className="label-input">Contraseña:</label>
                    <input
                        id="password"
                        name="password"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    >
                    </button>
                </div>
                <button type="submit" className="button-submit">Iniciar sesión</button>
                <div className="extra-links">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="others-options">
                    <div className="separator">
                        <span></span>
                        <div>o</div>
                        <span></span>
                    </div>
                    <button className="button-google" type="button">
                        <img className="icon-google" alt="google" src={iconGoogle} />
                        Iniciar sesión con Google
                    </button>
                </div>
            </form>
        </div>
    );
}