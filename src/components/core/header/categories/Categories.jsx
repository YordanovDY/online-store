import { useEffect } from "react"
import CategoriesItem from "./CategoriesItem";
import useFetch from "../../../../hooks/useFetch";

export default function Categories() {
    const CATEGORIES_URL = '/categories';

    const [pending, categories, error] = useFetch(CATEGORIES_URL, []);

    useEffect(() => {
        if (error) {
            console.error(error);
            // TODO: Implement error handling
        }
    }, [error]);

    return (
        <li className="relative">
            <div className="categories-nav-btn">
                <span className="nav-btn">
                    <i className="fa-solid fa-bars"></i>
                    <span>Categories</span>
                </span>
                {
                    !pending &&

                    <ul
                        className="cat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                        {categories.map(category =>
                            <CategoriesItem
                                key={category._id}
                                name={category.name}
                                subcategories={category.subcategories}
                            />
                        )}
                    </ul>
                }

            </div>
        </li>
    )
}