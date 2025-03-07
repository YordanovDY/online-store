import { useEffect, useState } from "react";
import ProductsList from "../shared/productsList/ProductsList";
import Slider from "./Slider";

export default function HomeComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/products/latest')
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(err => {
                console.error(err.message);
                setProducts([]);
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