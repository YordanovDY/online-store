import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useNotification from "../../hooks/useNotification";

export function useCatalog(subcategoryId, searchParams) {
    const [subcategoryName, setSubcategoryName] = useState('');
    const [page, setPage] = useState(1);
    const { notificationAlert, notify } = useNotification();


    const PRODUCTS_URL = `/products/catalog/${subcategoryId}/products?page=${page}`;
    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const PAGES_URL = `/products/catalog/${subcategoryId}/pages`;


    const [pendingProducts, products, productsError] = useFetch(PRODUCTS_URL, []);

    const [_, subcategory, subcategoryError] = useFetch(SUBCATEGORY_URL, {});

    const [pendingPagesCount, pagesCount, pagesCountError] = useFetch(PAGES_URL, 1);


    useEffect(() => {
        if (productsError) {
            notify(productsError, 'error')
        }
    }, [productsError, page]);

    useEffect(() => {
        if (subcategoryError) {
            notify(subcategoryError, 'error')
            return;
        }

        setSubcategoryName(subcategory.name);
    }, [subcategory, subcategoryError]);

    useEffect(() => {
        if (pagesCountError) {
            notify(pagesCountError, 'error')
        }
    }, [pagesCountError]);

    useEffect(() => {
        const newPage = Number(searchParams.get("page")) || 1;
        setPage(newPage);

    }, [searchParams])


    return {
        subcategoryName,
        products,
        pendingProducts,
        pendingPagesCount,
        pagesCount,
        page,
        notificationAlert
    }
}