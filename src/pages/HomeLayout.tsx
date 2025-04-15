import { NavBarHome } from "../components/search";
import { HOME_TITLE } from "../constants/constans";

export const HomeLayout = () => {
    document.title = HOME_TITLE;

    return (
        <main className="container-home">
            <NavBarHome />
            <section className="main-content">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page content.</p>
            </section>
        </main>
    );
}