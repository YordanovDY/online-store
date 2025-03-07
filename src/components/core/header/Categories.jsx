export default function Categories() {
    return(
        <li className="relative">
        <div className="categories-nav-btn">
            <a href="#">
                <i className="fa-solid fa-bars"></i>
                <span>Categories</span>
            </a>
            <ul
                className="cat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                <li className="cat-dropdown-item">
                    <span>Mobile Devices</span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <ul
                        className="subcat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Smartphones
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Tablets
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="cat-dropdown-item">
                    <span>Computers and Peripheral</span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <ul
                        className="subcat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                PC
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Laptops
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Mice
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Keyboards
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Monitors
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="cat-dropdown-item">
                    <span>TVs and Audio</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>

                <li className="cat-dropdown-item">
                    <span>Photo and Video</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>

                <li className="cat-dropdown-item">
                    <span>Household Appliances</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>

                <li className="cat-dropdown-item">
                    <span>Vehicles</span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <ul
                        className="subcat-dropdown absolute light-gray-bg coal-c padding-20 d-flex f-direction-column gap-20 ls-none">
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Bicycles
                            </a>
                        </li>
                        <li>
                            <a className="cat-dropdown-item d-block" href="#">
                                Scooters
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </li>
    )
}