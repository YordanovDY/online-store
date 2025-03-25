import useFetch from '../../../hooks/useFetch';
import LoadingSpinner from '../../shared/loading-spinner/LoadingSpinner';
import styles from './MyProducts.module.css';
import ProductRow from './product-row/ProductRow';

export default function MyProducts() {
    const [pending, products] = useFetch('/products/my', []);

    return (
        <section className={styles['my-products-section']}>
            <h2 className="fancy-header">My products</h2>

            {pending
                ? <LoadingSpinner />

                : <table className={styles['table']}>
                    <thead>
                        <tr className={styles['tr']}>
                            <th className={styles['td']}>Created at</th>
                            <th className={styles['td']}>Name</th>
                            <th className={styles['td']}>Quantity</th>
                            <th className={styles['td']}>Price</th>
                            <th className={styles['td']}>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <ProductRow key={product._id} {...product} />)}
                    </tbody>
                </table>
            }
        </section>
    );
}