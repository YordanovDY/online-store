import { Link } from 'react-router';
import styles from './ProductsListItem.module.css';
import Price from '../../price/Price';

export default function ProductsListItem({ imageUrl, name, price, productId }) {

    const onErrorHandler = (e) => {
        e.currentTarget.src = '/images/no-image.png'
    }

    return (
        <li>
            <Link to={`/products/${productId}/details`} className={styles['product-item']}>
                <img className={styles['product-item-img']} src={imageUrl} onError={onErrorHandler} />
                <h4 className={styles['product-item-title']}>{name}</h4>
                <Price price={price} />
            </Link>
        </li>
    )
}