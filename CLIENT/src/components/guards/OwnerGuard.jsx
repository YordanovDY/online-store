import { Navigate, Outlet, useParams } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";

export default function OwnerGuard() {
    const { user } = useUserContext();
    const { productId } = useParams();
    const [pending, product] = useFetch(`/products/catalog/${productId}`, {});

    return (
        <>
            {pending

                ? <LoadingSpinner />

                : <>{(user.isOwner(product.creator) || user.isAdmin()) ? <Outlet /> : <Navigate to="/no-permissions" />}</>

            }
        </>
    );
}