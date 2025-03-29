import styles from './ProductsList.module.css';
import ProductsListItem from './products-list-item/ProductsListItem'; 
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

export default function ProductsList({ title, products, isLoading }) {

    return (
        <section className="d-flex f-direction-column gap-10">
            <h2 className="fancy-header">{title}</h2>

            {isLoading
                ? <LoadingSpinner />
                :
                <ul className={styles['products-list']}>
                    {products.length === 0
                        ? <div className={styles['products-not-found']}>Products Not Found</div>

                        : products.map(product =>
                            <ProductsListItem
                                key={product._id}
                                imageUrl={product.imageUrl}
                                name={product.name}
                                price={product.price}
                                productId={product._id}
                            />)
                    }
                </ul>

            }

        </section>
    )
}