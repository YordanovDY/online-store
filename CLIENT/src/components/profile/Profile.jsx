import { Link, useNavigate } from "react-router";
import ContactDetails from "../shared/contact-details/ContactDetails";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import { useEffect } from "react";
import LogoutButton from "../shared/logout-button/LogoutButton";
import styles from "./Profile.module.css";

export default function Profile() {
    const [pending, contactDetails, userError] = useFetch('/user/data', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (userError) {
            navigate('/404');
        }

    }, [userError]);



    return (
        <section className={styles['profile-section']}>
            {pending
                ? <LoadingSpinner />

                : <ContactDetails
                    contacts={contactDetails}
                />
            }

            <nav className="d-flex f-direction-column gap-20 padding-20">
                <Link className="button btn-secondary align-center" to="/profile/my-orders">My Orders</Link>
                <Link className="button btn-secondary align-center" to="/profile/add-contact-info">Add / Edit Contact Details</Link>
                <LogoutButton classProp={"button btn-secondary"} />
            </nav>
        </section>
    );
}