import { useEffect, useState } from "react"
import categoriesService from "../../../services/categoryService"
import CategoriesItem from "./CategoriesItem";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriesService.getCategories()
            .then(result => {
                setCategories(result)
            })
            .catch(err => {
                // TODO: Implement error handling
                console.error(err.message);
            })
    }, [])
    return (
        <li className="relative">
            <div className="categories-nav-btn">
                <a href="#">
                    <i className="fa-solid fa-bars"></i>
                    <span>Categories</span>
                </a>
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
            </div>
        </li>
    )
}