import { useEffect, useState } from "react";
import ProductsList from "../shared/productsList/ProductsList";
import Slider from "./Slider";
import productsService from "../../services/productService";

export default function HomeComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsService.getLatestProducts()
            .then(result => {
                setProducts(result);
            })
            .catch(err => {
                // TODO: Implement error handling
                console.error(err.message);
            });
    }, []);

    return (
        <>
            <main className="padding-20 d-flex f-direction-column gap-50">
                <Slider />
                <ProductsList title="Latest Products" products={products} />
                {/* <ProductsList title="Best Selling" /> */}
            </main>

        </>
    )
}