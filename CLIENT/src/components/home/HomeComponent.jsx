import ProductsList from "../shared/products-list/ProductsList";
import Slider from "./slider/Slider";
import useFetch from "../../hooks/useFetch";

export default function HomeComponent() {
    const [pending, products, error] = useFetch('/products/latest', []);

    return (
        <>
            <main className="padding-20 d-flex f-direction-column gap-50">
                <Slider />
                {error
                    ? <ProductsList title="Ooops! Something went wrong." products={[]} isLoading={false} />
                    : <ProductsList title="Latest Products" products={products} isLoading={pending} />
                }
            </main>

        </>
    )
}