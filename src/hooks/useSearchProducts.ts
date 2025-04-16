import { useState } from "react";
import { ProductRecord } from "types/props";
import { useShowUserMessage } from "../hooks";

export const useSearchProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductRecord[]>([]);

    const onSearch = (searchValue: string) => {
        if (searchValue.trim().length < 3) {
            useShowUserMessage({
                icon: "info",
                title: "Información",
                message: "Por favor ingrese al menos 3 carácteres para realizar la búsqueda."
            });
            return;
        }

        setLoading(true);
        setTimeout(() => {
            // Simulate a search result.
            const simulatedProducts: ProductRecord[] = [
                {
                    id: 1,
                    name: "Producto 1",
                    price: 100,
                    imageUrl: "https://via.placeholder.com/150"
                },
                {
                    id: 2,
                    name: "Producto 2",
                    price: 200,
                    imageUrl: "https://via.placeholder.com/150"
                },
                {
                    id: 2,
                    name: "Producto 2",
                    price: 200,
                    imageUrl: "https://via.placeholder.com/150"
                }
            ];

            setProducts(simulatedProducts);
            setLoading(false);

            if (simulatedProducts.length === 0) {
                useShowUserMessage({
                    icon: "info",
                    title: "Información",
                    message: "No se encontraron resultados para su búsqueda."
                });
                return;
            }
        }, 2000);
    };

    return { onSearch, products, loading };
};