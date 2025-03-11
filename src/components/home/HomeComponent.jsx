import { useEffect, useState } from "react";
import ProductsList from "../shared/products-list/ProductsList";
import Slider from "./slider/Slider";
import { getLatestProducts } from "./HomeService";

export default function HomeComponent() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getLatestProducts(signal)
            .then(result => {
                setIsLoading(false)
                setProducts(result);
            })
            .catch(err => {
                // TODO: Implement error handling
                
                if (err.name !== 'AbortError') {
                    console.error(err.message);
                }
            });

        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <>
            <main className="padding-20 d-flex f-direction-column gap-50">
                <Slider />
                <ProductsList title="Latest Products" products={products} isLoading={isLoading} />
                {/* <ProductsList title="Best Selling" /> */}
            </main>

        </>
    )
}