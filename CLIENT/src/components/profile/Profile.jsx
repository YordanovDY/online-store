import { Link, useNavigate } from "react-router";
import ContactDetails from "../shared/contact-details/ContactDetails";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import { useEffect } from "react";
import LogoutButton from "../shared/logout-button/LogoutButton";

export default function Profile() {
    const [pending, contactDetails, userError] = useFetch('/user/data', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (userError) {
            navigate('/404');
        }

    }, [userError]);



    return (
        <section className="d-flex jc-center gap-20">
            {pending
                ? <LoadingSpinner />

                : <ContactDetails
                    contacts={contactDetails}
                />
            }

            <nav className="padding-20 d-flex f-direction-column gap-20 ">
                <Link className="button btn-secondary" to="/profile/add-contact-info">Add / Edit Contact Details</Link>
                <LogoutButton classProp={"button btn-secondary"} />
            </nav>
        </section>
    );
}