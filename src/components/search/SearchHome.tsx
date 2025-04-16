import { IntroductionHome, ProductCardsHome } from "../search";

export const SearchHome = () => {
    return (
        <div className="search-home">
            <IntroductionHome />
            <section className="search-home__content">
                <div className="search-home__input">
                    <input
                        type="text"
                        placeholder="¿Qué producto buscas? 🛒"
                        min={3}
                        maxLength={50}
                    />
                    <button className="search-home_button">Buscar</button>
                </div>
            </section>
            <ProductCardsHome />
        </div>
    );
};