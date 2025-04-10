import { useEffect } from "react";
import { iconApp } from "../assets";
import { LOGIN_TITLE } from "../constants/constans";

export const LoginDALayout = () => {
    useEffect(() => { document.title = LOGIN_TITLE }, []);

    return (
        <>
            <main className="container-login">
                <section className="main-content">
                    <nav className="navbar">
                        <div className="app-title">
                            <img className="icon-app" alt="logo" src={iconApp} />
                            <h1 className="title">MercAnalyzer</h1>
                        </div>
                    </nav>
                </section>
            </main>
        </>
    );
}