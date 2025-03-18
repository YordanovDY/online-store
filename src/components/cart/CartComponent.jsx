import { CartContext } from '../../contexts/CartContext';
import useNotification from '../../hooks/useNotification';
import LoadingSpinner from '../shared/loading-spinner/LoadingSpinner';
import { useCart } from './cartApi';
import styles from './CartComponent.module.css';
import ItemsList from './items-list/ItemsList';
import Summary from './summary/Summary';

export default function CartComponent() {
    const { pending, items, totalPrice, recalcTotalPrice } = useCart();
    const { notificationAlert, notify } = useNotification();

    const onRemoveSuccess = () => {
        notify('Item is removed from the cart', 'success');
    }

    const onRemoveFail = () => {
        notify('Something went wrong. Please, try again later!', 'error');
    }

    const priceRecalc = (subtrahend) => {
        recalcTotalPrice(subtrahend);
    }

    return (
        <CartContext.Provider value={{ notifySuccess: onRemoveSuccess, notifyFail: onRemoveFail, priceRecalc }}>
            {
                pending
                    ? <LoadingSpinner />
                    : < section className={styles['cart-section']} >
                        <h2>My Cart</h2>
                        <main className={styles['main']}>
                            <ItemsList itemsArrProp={items} />
                            <Summary totalPrice={totalPrice} />
                        </main>

                        {notificationAlert}
                    </section >
            }
        </CartContext.Provider>
    );
}