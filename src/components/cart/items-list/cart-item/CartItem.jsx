import { onImageErrorHandler } from '../../../../utils/onErrorUtil';
import styles from '../../CartComponent.module.css';

export default function CartItem({ name, imageUrl, price, quantity }) {
    return (
        <li className={styles['item']}>
            <span>{quantity}x</span>
            <img className={styles['item-image']} src={imageUrl} alt={name} onError={onImageErrorHandler} />
            <span>{name}</span>
            <span>{price}$</span>
        </li>
    );
}