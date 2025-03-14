import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import ProductsList from "../shared/products-list/ProductsList";
import CatalogNav from "./catalog-nav/CatalogNav";
import Paginator from "../shared/paginator/Paginator";
import useFetch from "../../hooks/useFetch";

export default function CatalogComponent() {
    const { subcategoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const PRODUCTS_URL = `/products/catalog/${subcategoryId}/products?page=${page}`;
    const [pendingProducts, products, productsError] = useFetch(PRODUCTS_URL, []);

    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pendingSubcategory, subcategory, subcategoryError] = useFetch(SUBCATEGORY_URL, {});

    const [subcategoryName, setSubcategoryName] = useState('');

    const PAGES_URL = `/products/catalog/${subcategoryId}/pages`;

    const [pendingPagesCount, pagesCount, pagesCountError] = useFetch(PAGES_URL, 1);

    useEffect(() => {
        if (productsError) {
            console.error(productsError);
            // TODO: Implement error handling
        }
    }, [productsError, page]);

    useEffect(() => {
        if (subcategoryError) {
            console.error(subcategoryError);
            // TODO: Implement error handling
            return;
        }

        setSubcategoryName(subcategory.name);
    }, [subcategory, subcategoryError]);

    useEffect(() => {
        if (pagesCountError) {
            console.error(pagesCountError);
            // TODO: Implement error handling
        }
    }, [pagesCountError]);

    useEffect(() => {
        const newPage = Number(searchParams.get("page")) || 1;
        setPage(newPage);

    }, [searchParams])

    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <CatalogNav />
            <ProductsList title={subcategoryName} products={products} isLoading={pendingProducts} />
            <Paginator
                isLoading={pendingPagesCount}
                currentPage={page}
                pagesCount={pagesCount}
                subcategoryId={subcategoryId}
            />
        </section>
    )
}