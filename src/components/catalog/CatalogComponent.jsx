import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import ProductsList from "../shared/productsList/ProductsList";
import CatalogNav from "./CatalogNav";
import Paginator from "../shared/paginator/Paginator";
import productsService from "../../services/productService";

export default function CatalogComponent() {
    const { subcategoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(10);
    const [searchParams, setSearchParams] = useSearchParams();

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

    useEffect(() => {
        setPage(searchParams.get('page'));

        productsService.getProducts(subcategoryId, page)
            .then(result => {
                setProducts(result);
            })
            .catch(err => {
                // TODO: Implement error handling
                console.error(err.message);
            });

    }, [page, subcategoryId, searchParams]);

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