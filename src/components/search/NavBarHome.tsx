import { iconApp } from "../../assets";

export const NavBarHome = () => {
    return (
        <nav className="navbar-home">
            <div className="navbar-home__container">
                <div className="app-title">
                    <img className="icon-app" alt="logo" src={iconApp} />
                    <h1 className="title">MercAnalyzer</h1>
                </div>
                <button className="button-profiel">
                    Mi usuario
                </button>
            </div>
        </nav>
    );
}