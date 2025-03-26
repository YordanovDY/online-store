import { useSearchParams } from "react-router";
import useNotification from "../../hooks/useNotification";
import ProductsList from "../shared/products-list/ProductsList";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import style from './CatalogSearch.module.css';

export default function CatalogSearch() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const [pending, products, error] = useFetch(`/products/catalog?search=${query}`);

    const { notificationAlert, notify } = useNotification();

    useEffect(() => {
        if (error) {
            notify(error, 'error');
        }
    }, [error, notify]);

    return (
        <section className={style['search-section']}>
            <ProductsList title={`Search: ${query}`} products={products} isLoading={pending} />

            {/* // TODO: Implement pagination */}
            {/* <Paginator
                isLoading={pendingPagesCount}
                currentPage={page}
                pagesCount={pagesCount}
                subcategoryId={subcategoryId}
            /> */}
            {notificationAlert}
        </section>
    );
}