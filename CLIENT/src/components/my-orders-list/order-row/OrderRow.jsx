import { Link } from 'react-router';
import styles from '../MyOrdersList.module.css';
import { getProductsCount } from './OrderRowUtil';

export default function OrderRow(data) {
    const { _id, orderedAt, totalPrice, products, status } = data.data;

    return (
        <tr className={styles['tr']}>
            <td className={styles['td']}>{orderedAt}</td>
            <td className={styles['td']}>{getProductsCount(products)}</td>
            <td className={styles['td']}>{status}</td>
            <td className={styles['td']}>{Number(totalPrice).toFixed(2)}$</td>

            <td className={styles['td']}>
                <Link to={`/orders/${_id}/details`} className="button btn-primary">Details</Link>
            </td>
        </tr>
    );
}