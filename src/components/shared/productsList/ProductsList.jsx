import styles from './ProductsList.module.css';
import ProductsListItem from './ProductsListItem';

export default function ProductsList({ title, products }) {
    return (
        <section className="d-flex f-direction-column gap-10">
            <h2 className="fancy-header">{title}</h2>
            <ul className={styles['products-list']}>
                {products.length === 0
                    ? <div className={styles['products-not-found']}>Products Not Found</div>
                    
                    : products.map(product =>
                        <ProductsListItem
                            key={product._id}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            price={product.price}
                        />)
                }
            </ul>
        </section>
    )
}