import { useEffect, useState } from 'react';
import './ProductDetailsComponent.css';
import { useNavigate, useParams } from 'react-router';
import ProductHero from './product-hero/ProductHero';
import ProductDescription from './product-description/ProductDescription';
import ProductCharacteristics from './product-characteristics/ProductCharacteristics';
import useFetch from '../../../hooks/useFetch';

export default function ProductDetailsComponent() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const PRODUCT_URL = `/products/catalog/${productId}`
    const [pending, product, error] = useFetch(PRODUCT_URL, {});
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (error) {
            navigate('/404');
        }
    }, [error, navigate]);

    useEffect(() => {
        if (pending) {
            return;
        }

        setQuantity(product.quantity)
    }, [pending, product]);

    const quantityUpdater = (updatedQuantity) => {
        setQuantity(updatedQuantity);
    }

    return (
        <section>
            <div className="flex-container">
                <ProductHero
                    brand={product.brand}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    quantity={quantity}
                    creator={product.creator}
                    pending={pending}
                />

                <ProductDescription
                    description={product.description}
                    creator={product.creator}
                    pending={pending}
                    productId={product._id}
                    quantity={quantity}
                    onQuantityUpdate={quantityUpdater}
                />

            </div>

            <ProductCharacteristics
                characteristicsArr={product.characteristics}
                pending={pending}
            />
        </section>
    );
}