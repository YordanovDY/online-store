import { Link } from "react-router";
import styles from '../Header.module.css';

export default function GuestNav() {
    return (
        <>
            <li>
                <div className={styles['sign-in-btn']}>
                    <Link className="nav-btn" to="/auth/login">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <span>Login</span>
                    </Link>

                    <Link className="nav-btn" to="/auth/register">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <span>Register</span>
                    </Link>
                </div>
            </li>
        </>
    );
}