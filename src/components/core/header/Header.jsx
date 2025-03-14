import { Link } from "react-router";
import Categories from "./categories/Categories";
import SearchForm from "./search-form/SearchForm";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="padding-30 coal-bg pale-blue-c">
            <nav>
                <ul className={styles['header-nav-ul']}>
                    <li>
                        <Link to="/" className="nav-btn">
                            <i className="fa-solid fa-house" />
                            <span>Home</span>
                        </Link>

                    </li>

                    <Categories />
                    <SearchForm />

                    <li>
                        <a className="nav-btn" href="#">
                            <i className="fa-regular fa-address-card"></i>
                            <span>Contacts</span>
                        </a>
                    </li>

                    <li>
                        <Link className="nav-btn" to="/login">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <span>Login</span>
                        </Link>
                    </li>

                    {/* <li>
                        <Link className="cart-btn" to="/my-cart">
                            <i className="fa-solid fa-cart-shopping" />
                        </Link>
                    </li> */}

                </ul>
            </nav>
        </header>
    )
}