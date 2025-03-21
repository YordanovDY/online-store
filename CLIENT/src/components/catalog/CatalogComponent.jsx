import { Link, useParams, useSearchParams } from "react-router";
import ProductsList from "../shared/products-list/ProductsList";
import CatalogNav from "./catalog-nav/CatalogNav";
import Paginator from "../shared/paginator/Paginator";
import { useUserContext } from "../../contexts/UserContext";
import { useCatalog } from "./catalogApi";
import './CatalogComponent.css';

export default function CatalogComponent() {
    const { subcategoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { user } = useUserContext();


    const { subcategoryName,
        products,
        pendingProducts,
        pendingPagesCount,
        pagesCount,
        page,
        notificationAlert
    } = useCatalog(subcategoryId, searchParams);


    const createBtn = user.isStoreManager() || user.isAdmin()
        ? <Link to={`/products/create/${subcategoryId}`} className="button btn-secondary add-new">Add New Product</Link>
        : ''


    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <CatalogNav />
            {createBtn}
            <ProductsList title={subcategoryName} products={products} isLoading={pendingProducts} />
            <Paginator
                isLoading={pendingPagesCount}
                currentPage={page}
                pagesCount={pagesCount}
                subcategoryId={subcategoryId}
            />
            {notificationAlert}
        </section>
    )
}