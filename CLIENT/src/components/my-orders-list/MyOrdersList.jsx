import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../shared/loading-spinner/LoadingSpinner';
import styles from './MyOrdersList.module.css';
import OrderRow from './order-row/OrderRow';
import useNotification from '../../hooks/useNotification';

export default function MyOrdersList() {
    const [pending, items, error] = useFetch('/user/orders', []);
    const [ordersList, setOrderList] = useState(<tr><td>No order records yet</td></tr>);
    const { notificationAlert, notify } = useNotification();

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setOrderList(items.map(item => <OrderRow key={item._id} data={{ ...item }} />));
    }, [items]);

    useEffect(() => {
        if (error) {
            return notify(error, 'error');
        }
    }, [error, notify]);

    return (
        <section className={styles['my-orders-section']}>
            <h2 className="fancy-header">My orders</h2>

            {pending
                ? <LoadingSpinner />

                : <table className={styles['table']}>
                    <thead>
                        <tr className={styles['tr']}>
                            <th className={styles['td']}>Date</th>
                            <th className={styles['td']}>Products Count</th>
                            <th className={styles['td']}>Status</th>
                            <th className={styles['td']}>Price</th>
                            <th className={styles['td']}>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList}
                    </tbody>
                </table>
            }
            {notificationAlert}
        </section>
    );
}