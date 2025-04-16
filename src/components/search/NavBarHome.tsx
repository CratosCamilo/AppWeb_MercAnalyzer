import { iconApp } from "../../assets";
import { useClearSession, useTheme } from "../../hooks";
import { Loading } from "../common";

export const NavBarHome = () => {
    const { toggleTheme } = useTheme();
    const { onClearSession, loading } = useClearSession();

    return (
        <nav className="navbar">
            {loading && <Loading />}

            <div className="app-title">
                <img className="icon-app" alt="logo" src={iconApp} />
                <h1 className="title">MercAnalyzer</h1>
            </div>
            <div className='text-user'>
                <p>ANDRESFLONCAM@GMAIL.COM</p>
                <button
                    className='button-signout'
                    onClick={onClearSession}
                >
                    Cerrar sesión
                </button>
            </div>
            <button className="theme" onClick={toggleTheme}></button>
        </nav>
    );
};