import { CardHome } from "./CardHome";

export const ProductCardsHome = () => {
    return (
        <section className="cards-container">
            <CardHome />
            <CardHome />
            <CardHome />
            <p className="information-cards">Al seleccionar un producto podrás acceder al enlace original publicado en Mercado Libre.</p>
        </section>
    );
};