import { useContext } from 'react';
import { onImageErrorHandler } from '../../../../utils/onErrorUtil';
import { useRemoveItem } from '../../cartApi';
import styles from '../../CartComponent.module.css';
import { CartContext } from '../../../../contexts/CartContext';

export default function CartItem({ name, imageUrl, price, quantity, productId, removeItemFromArray }) {
    const { pending, removeHandler } = useRemoveItem(productId);
    const { notifySuccess, notifyFail } = useContext(CartContext);

    return (
        <>
            <li className={styles['item']}>
                <span>{quantity}x</span>
                <img className={styles['item-image']} src={imageUrl} alt={name} onError={onImageErrorHandler} />
                <span>{name}</span>
                <span>{price}$</span>
                <button
                    disabled={pending}
                    onClick={async () => {
                        try {
                            await removeHandler();
                            notifySuccess();
                            removeItemFromArray();
                        } catch (err) {
                            notifyFail();
                        }
                    }}
                    className="button">
                    <i className="fa-solid fa-xmark" />
                </button>
            </li>
        </>
    );
}