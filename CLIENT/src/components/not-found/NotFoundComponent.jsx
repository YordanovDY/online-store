import { Link } from "react-router";
import './NotFoundComponent.css';
export default function NotFoundComponent() {
    return (
        <section className="section-404">
            <h2 className="header-404">404 Page Not Found</h2>
            <i className="fa-solid fa-triangle-exclamation warning-icon"></i>
            <p>Oops! The page you are looking for does not exist. Try checking the URL or go back to the homepage.</p>
            <div className="d-flex gap-20">
                <Link to='/' className="button btn-primary">
                    Home
                </Link>

                <Link to='/contacts' className="button btn-secondary">
                    Contacts
                </Link>
            </div>
        </section>
    );
}