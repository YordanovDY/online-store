import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import useNotification from "../../hooks/useNotification";
import { buildOptions } from "../../utils/optionsUtil";
import api from "../../services/api";

export function useCatalog(subcategoryId, searchParams) {
    const navigate = useNavigate();
    const [subcategoryName, setSubcategoryName] = useState('');
    const [page, setPage] = useState(1);
    const { notificationAlert, notify } = useNotification();
    const [sortOptions, setSortOptions] = useState({ price: 'asc' });
    const [sortingQuery, setSortingQuery] = useState('');

    const [products, setProducts] = useState([]);
    const [pendingProducts, setPendingProducts] = useState(true);

    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const PAGES_URL = `/products/catalog/${subcategoryId}/pages`;


    const [_, subcategory, subcategoryError] = useFetch(SUBCATEGORY_URL, {});

    const [pendingPagesCount, pagesCount, pagesCountError] = useFetch(PAGES_URL, 1);


    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const options = buildOptions({ sort: sortOptions });

        setPendingProducts(true);

        api.get(`/products/catalog/${subcategoryId}/products?page=${page}`, signal, options)
            .then(result => {
                setProducts(result);
                setPendingProducts(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                console.error(err);
            })

        return () => {
            abortController.abort();
        }
    }, [subcategoryId, page, sortOptions]);


    useEffect(() => {
        if (subcategoryError) {
            return navigate('/404')
        }

        setSubcategoryName(subcategory.name);
    }, [subcategory, subcategoryError, navigate]);

    useEffect(() => {
        if (pagesCountError) {
            notify(pagesCountError, 'error')
        }
    }, [pagesCountError, notify]);


    useEffect(() => {
        const newPage = Number(searchParams.get("page")) || 1;
        setPage(newPage);

        let newSort = { price: 'asc' };
        let newQuery = '';

        const sortParam = searchParams.get("sort");

        switch (sortParam) {
            case 'price_asc':
                newSort = { price: 'asc' };
                newQuery = 'sort=price_asc';
                break;

            case 'price_desc':
                newSort = { price: 'desc' };
                newQuery = 'sort=price_desc';
                break;

            case 'alphabetical_asc':
                newSort = { name: 'asc' };
                newQuery = 'sort=alphabetical_asc';
                break;

            case 'alphabetical_desc':
                newSort = { name: 'desc' };
                newQuery = 'sort=alphabetical_desc';
                break;
        }

        setSortOptions(newSort);
        setSortingQuery(newQuery);

    }, [searchParams])


    return {
        subcategoryName,
        products,
        pendingProducts,
        pendingPagesCount,
        pagesCount,
        page,
        sortingQuery,
        notificationAlert
    }
}