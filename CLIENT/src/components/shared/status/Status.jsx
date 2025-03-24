import styles from './Status.module.css';

export default function Status({ status }) {
    switch (status) {
        case 'Processing':
            return <span className={styles['processing']}>Processing</span>

        case 'Shipped':
            return <span className={styles['shipped']}>Shipped</span>

        case 'Delivered':
            return <span className={styles['delivered']}>Delivered</span>
    }
}