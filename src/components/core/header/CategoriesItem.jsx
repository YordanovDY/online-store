export default function CategoriesItem({ name, subcategories }) {
    return (
        <li className="cat-dropdown-item">
            <span>{name}</span>
            <i className="fa-solid fa-chevron-right"></i>
            <ul
                className="subcat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                {subcategories.map(subcategory =>
                    <li key={subcategory._id}>
                        <a className="cat-dropdown-item d-block" href="#">
                            {subcategory.name}
                        </a>
                    </li>
                )}
            </ul>
        </li>
    );
}