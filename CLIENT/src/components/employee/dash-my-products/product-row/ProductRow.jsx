import { Link } from 'react-router';
import { shortDateFormat } from '../../../../utils/dateUtil';
import styles from '../MyProducts.module.css';

export default function ProductRow({
    _id,
    createdAt,
    name,
    quantity,
    price
}) {
    return (
        <tr className={styles['tr']}>
            <td className={styles['td']}>{shortDateFormat(createdAt)}</td>
            <td className={styles['td']}>{name}</td>
            <td className={styles['td']}>{quantity}</td>
            <td className={styles['td']}>{Number(price).toFixed(2)}$</td>

            <td className={styles['td']}>
                <Link to={`/products/${_id}/details`} className="button btn-primary">Details</Link>
            </td>
        </tr>
    );
}