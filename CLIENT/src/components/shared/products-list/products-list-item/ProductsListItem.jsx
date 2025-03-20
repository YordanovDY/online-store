import { Link } from 'react-router';
import styles from './ProductsListItem.module.css';
import Price from '../../price/Price';
import { onImageErrorHandler } from '../../../../utils/onErrorUtil';

export default function ProductsListItem({ imageUrl, name, price, productId }) {
    return (
        <li>
            <Link to={`/products/${productId}/details`} className={styles['product-item']}>
                <img className={styles['product-item-img']} src={imageUrl} onError={onImageErrorHandler} />
                <h4 className={styles['product-item-title']}>{name}</h4>
                <Price price={price} />
            </Link>
        </li>
    )
}