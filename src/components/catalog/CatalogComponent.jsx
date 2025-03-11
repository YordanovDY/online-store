import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import ProductsList from "../shared/products-list/ProductsList";
import CatalogNav from "./catalog-nav/CatalogNav";
import Paginator from "../shared/paginator/Paginator";
import { getPages, getProducts } from "./CatalogService";

export default function CatalogComponent() {
    const { subcategoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isProductLoading, setIsProductLoading] = useState(true);
    const [isPaginatorLoading, setIsPaginatorLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getPages(subcategoryId, signal)
            .then(result => {
                setIsPaginatorLoading(false);
                setPagesCount(result);
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

    }, [subcategoryId]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getProducts(subcategoryId, page, signal)
            .then(result => {
                setIsProductLoading(false);
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
    }, [subcategoryId, page]);

    useEffect(() => {
        const newPage = Number(searchParams.get("page")) || 1;
        setPage(newPage);

    }, [searchParams])

    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <CatalogNav />
            <ProductsList title="Laptops" products={products} isLoading={isProductLoading} />
            <Paginator
                isLoading={isPaginatorLoading}
                currentPage={page}
                pagesCount={pagesCount}
                subcategoryId={subcategoryId}
            />
        </section>
    )
}