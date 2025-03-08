import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProductsList from "../shared/productsList/ProductsList";
import CatalogNav from "./CatalogNav";
import Paginator from "../shared/paginator/Paginator";
import productsService from "../../services/productService";

export default function CatalogComponent() {
    const { subcategoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(10);

    const pageChangeHandler = (chosenPage) => {
        setPage(chosenPage);
    }

    const pageUpHandler = () => {
        if (page >= pagesCount) {
            return;
        }

        setPage(state => state + 1);
    }

    const pageDownHandler = () => {
        if (page <= 1) {
            return;
        }

        setPage(state => state - 1);
    }

    // const options = {
    //     options: {
    //         subcategory: '67ab4d938bca21a3b8a19e06'
    //     }
    // };

    useEffect(() => {
        // fetch('http://localhost:3030/products/catalog?page=1', {
        //     method: "GET",
        //     headers: {
        //         options: JSON.stringify(options)
        //     }
        // })
        //     .then(res => res.json())
        //     .then(result => setProducts(result))
        //     .catch(err => {
        //         console.error(err.message);
        //         setProducts([]);
        //     });

        productsService.getProducts(subcategoryId, page)
            .then(result => {
                setProducts(result);
            })
            .catch(err => {
                // TODO: Implement error handling
                console.error(err.message);
            });
    }, []);

    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <CatalogNav />
            <ProductsList title="Laptops" products={products} />
            <Paginator
                currentPage={page}
                pagesCount={pagesCount}
                onPageChange={pageChangeHandler}
                onPageUp={pageUpHandler}
                onPageDown={pageDownHandler}
            />
        </section>
    )
}