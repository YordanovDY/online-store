import { Link } from "react-router";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";

export default function DashProductCreate() {
    const [pending, categories] = useFetch('/categories');

    return (
        <section className="padding-20 d-flex f-direction-column gap-30">
            <h2 className="fancy-header">Create Product</h2>

            <div className="d-flex f-direction-column gap-20">
                {pending
                    ? <LoadingSpinner />

                    : <>
                        {
                            categories.map(category =>
                                <article key={category._id} className="d-flex f-direction-column gap-10">
                                    <h4 className="header-saparator">{category.name}</h4>
                                    <div className="d-flex gap-20 f-wrap">
                                        {category.subcategories.map(subcat =>
                                            <Link
                                                key={subcat._id}
                                                to={`/products/create/${subcat._id}`}
                                                className="tile-button">{
                                                    subcat.name}
                                            </Link>)}
                                    </div>
                                </article>)
                        }
                    </>
                }

            </div>
        </section>
    );
}