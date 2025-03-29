import { Link } from "react-router";
import LogoutButton from "../../../shared/logout-button/LogoutButton";
import styles from '../Header.module.css';

export default function CustomerNav() {
    return (
        <>
            <li className="relative">
                <LogoutButton classProp={styles['logout-btn']} />

                <Link className="cart-btn" to="/profile/my-cart">
                    <i className="fa-solid fa-cart-shopping" />
                </Link>
            </li>
        </>
    );
}