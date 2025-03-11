import './ProductHero.css';

export default function ProductHero({ brand, name, imageUrl, quantity, price }) {

    const onErrorHandler = (e) => {
        e.currentTarget.src = '/images/no-image.png'
    }

    return (
        <aside className="product-hero d-flex f-direction-column gap-20 ai-center">
            <picture>
                <img src={imageUrl} alt={name} onError={onErrorHandler} />
                <figcaption>{brand}</figcaption>
            </picture>
            <h2>{name}</h2>
            <p className="product-price">{price}$</p>
        </aside>
    );
}