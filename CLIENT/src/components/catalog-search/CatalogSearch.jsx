import { useSearchParams } from "react-router";
import useNotification from "../../hooks/useNotification";
import ProductsList from "../shared/products-list/ProductsList";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

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
        <section className="d-flex f-direction-column gap-20 padding-20">
            <ProductsList title={query} products={products} isLoading={pending} />

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