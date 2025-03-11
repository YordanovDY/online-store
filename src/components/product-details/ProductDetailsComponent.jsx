import { useEffect, useState } from 'react';
import './ProductDetailsComponent.css';
import { useNavigate, useParams } from 'react-router';
import ProductHero from './product-hero/ProductHero';
import ProductDescription from './product-description/ProductDescription';
import ProductCharacteristics from './product-characteristics/ProductCharacteristics';
import { getProductDetails } from '../../services/commonServices';
import LoadingSpinner from '../shared/loading-spinner/LoadingSpinner';

export default function ProductDetailsComponent() {
    const { productId } = useParams();
    const navigate = useNavigate();

    // TODO: Fix qty input

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const incrementQuantityHandler = () => {
        setQuantity(state => state + 1);
    }

    const decrementQuantityHandler = () => {
        setQuantity(state => state - 1);
    }
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getProductDetails(productId, signal)
            .then(result => {
                setProduct(result);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error(err.message);
                    navigate('404');
                }
            })

        return () => {
            abortController.abort();
        }
    }, [])

    return (
        <section>
            {isLoading
                ? <LoadingSpinner />

                : <>
                    <div className="flex-container">
                        <ProductHero
                            brand={product.brand}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            quantity={product.quantity}
                        />

                        <ProductDescription
                            description={product.description}
                        />

                    </div>

                    <ProductCharacteristics
                        characteristicsArr={product.characteristics}
                    />
                </>
            }

        </section>
    );
}