import { useEffect } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import SimpleItemList from "./simple-item-list/SimpleItemList";
import ContactDetails from "./contact-details/ContactDetails";
import styles from './OrderComponent.module.css';

export default function OrderComponent() {
    const [cartPending, items, cartError] = useFetch('/user/cart', []);
    const [userPending, contactDetails, userError] = useFetch('/user/data', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (cartError) {
            navigate('/404');
        }

    }, [cartError]);

    useEffect(() => {
        if (userError) {
            navigate('/404');
        }

    }, [userError]);

    useEffect(() => {
        if (cartPending) {
            return;
        }

        if (items.length === 0) {
            navigate('/my-cart');
        }
        
    }, [cartPending]);

    console.log(typeof cartPending);

    return (
        <section className={styles['order-section']}>
            {cartPending || userPending
                ? <LoadingSpinner />
                : <>
                    <SimpleItemList itemsArrProp={items} />
                    <ContactDetails contacts={contactDetails} />
                </>
            }
        </section>
    );
}