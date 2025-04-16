import { iconApp } from "../../assets";
import { useTheme } from "../../hooks";

export const NavBarHome = () => {
    const { toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="app-title">
                <img className="icon-app" alt="logo" src={iconApp} />
                <h1 className="title">MercAnalyzer</h1>
            </div>
            <div className='text-user'>
                <p>ANDRESFLONCAM@GMAIL.COM</p>
                <button
                    className='button-signout'
                >
                    Cerrar sesión
                </button>
            </div>
            <button className="theme" onClick={toggleTheme}></button>
        </nav>
    );
};