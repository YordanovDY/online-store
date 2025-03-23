import { useEffect } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import SimpleItemList from "./simple-item-list/SimpleItemList";
import ContactDetails from "./contact-details/ContactDetails";
import styles from './OrderComponent.module.css';
import BasicForm from "../shared/basic-form/BasicForm";
import useMutate from "../../hooks/useMutate";

export default function OrderComponent() {
    const [cartPending, items, cartError] = useFetch('/user/cart', []);
    const [userPending, contactDetails, userError] = useFetch('/user/data', {});
    const { mutate } = useMutate('/orders', 'POST');
    const navigate = useNavigate();

    const inputs = [
        { name: 'paymentMethod', label: 'In Cash', type: 'radio', checked: 'true', value: 'In Cash' },
        { name: 'paymentMethod', label: 'Card Payment', type: 'radio', checked: 'false', value: 'Card Payment' },
    ]

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
            navigate('/profile/my-cart');
        }

    }, [cartPending]);


    const placeOrderHandler = async (formData) => {
        const payload = Object.fromEntries(formData);

        try {
            await mutate(payload);
            navigate('/');
            
            // TODO: Navigate to order details
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return (
        <section className={styles['order-section']}>
            {cartPending || userPending
                ? <LoadingSpinner />
                : <>
                    <SimpleItemList itemsArrProp={items} />
                    <ContactDetails contacts={contactDetails} />
                    <BasicForm
                        title="Payment Method"
                        inputsArray={inputs}
                        buttonText="Place an order"
                        submitHandler={placeOrderHandler}
                    />
                </>
            }
        </section>
    );
}