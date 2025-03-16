import LoadingSpinner from '../../shared/loading-spinner/LoadingSpinner';
import Price from '../../shared/price/Price';
import './ProductHero.css';

export default function ProductHero({ brand, name, imageUrl, quantity, price, pending }) {

    const onErrorHandler = (e) => {
        e.currentTarget.src = '/images/no-image.png'
    }

    return (
        <aside className="product-hero d-flex f-direction-column gap-20 ai-center">
            {pending
                ? <LoadingSpinner />
                : <>
                    <picture>
                        <img src={imageUrl} alt={name} onError={onErrorHandler} />
                        <figcaption>{brand}</figcaption>
                    </picture>
                    <h2>{name}</h2>
                    <Price price={price} />
                    {quantity <= 10 && <p className="qty-warning poller-one">Only <span className="qty">{quantity}</span> more left</p>}
                </>
            }

        </aside>
    );
}