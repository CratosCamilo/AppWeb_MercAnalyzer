import { useState } from "react";
import { FooterLogin, IntroductionLogin, LoginForm, NavBarLogin, RegisterForm } from "../components/Login";
import { LOGIN_TITLE } from "../constants/constans";

export const LoginDALayout = () => {
    document.title = LOGIN_TITLE;
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

    return (
        <>
            <main className="container-login">
                <section className="main-content">
                    <NavBarLogin
                        isLoginVisible={isLoginVisible}
                        isRegisterVisible={isRegisterVisible}
                        setIsLoginVisible={setIsLoginVisible}
                        setIsRegisterVisible={setIsRegisterVisible}
                    />
                    <IntroductionLogin />
                    <LoginForm
                        isLoginVisible={isLoginVisible}
                    />
                    <RegisterForm
                        isRegisterVisible={isRegisterVisible}
                    />
                    <FooterLogin />
                </section>
            </main >
        </>
    );
}