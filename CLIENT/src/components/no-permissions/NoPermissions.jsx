import { Link } from "react-router";
import './NoPermissions.css';
export default function NoPermissions() {
    return (
        <section className="section-no-permissions">
            <h2 className="header-no-permissions">Permission Denied!</h2>
            <i className="fa-solid fa-hand warning-icon"></i>
            <p>You are not allowed to access this page.</p>
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