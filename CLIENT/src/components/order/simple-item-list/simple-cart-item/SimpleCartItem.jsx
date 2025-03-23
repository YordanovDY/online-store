import { onImageErrorHandler } from '../../../../utils/onErrorUtil';
import styles from '../SimpleItemList.module.css';

export default function SimpleCartItem({ name, imageUrl, price, quantity }) {

    return (
        <>
            <li className={styles['item']}>
                <span>{quantity}x</span>
                <img className={styles['item-image']} src={imageUrl} alt={name} onError={onImageErrorHandler} />
                <span>{name}</span>
                <span>{Number(price).toFixed(2)}$</span>
            </li>
        </>
    );
}