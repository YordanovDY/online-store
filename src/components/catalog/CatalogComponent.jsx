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
    const [isLoading, setIsLoading] = useState(true);

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
        const abortController = new AbortController();
        const signal = abortController.signal;

        productsService.getProducts(subcategoryId, page, signal)
            .then(result => {
                setIsLoading(false)
                setProducts(result);
            })
            .catch(err => {
                // TODO: Implement error handling

                if (err.name !== "AbortError") {
                    console.error(err.message);
                }
            });

        return () => {
            abortController.abort();
        }
    }, [subcategoryId, page,]);

    useEffect(() => {
        const newPage = Number(searchParams.get("page")) || 1;
        setPage(newPage);
        
    }, [searchParams])

    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <CatalogNav />
            <ProductsList title="Laptops" products={products} isLoading={isLoading} />
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