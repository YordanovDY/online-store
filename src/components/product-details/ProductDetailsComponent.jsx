import { useEffect, useState } from 'react';
import './ProductDetailsComponent.css';
import { useNavigate, useParams } from 'react-router';
import ProductHero from './product-hero/ProductHero';
import ProductDescription from './product-description/ProductDescription';
import ProductCharacteristics from './product-characteristics/ProductCharacteristics';
import { getProductDetails } from '../../services/commonServices';

import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../shared/loading-spinner/LoadingSpinner';

export default function ProductDetailsComponent() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const PRODUCT_URL = `/products/catalog/${productId}`
    const [pending, product, error] = useFetch(PRODUCT_URL, {});

    // TODO: Fix qty input

    // const [quantity, setQuantity] = useState(1);

    // const incrementQuantityHandler = () => {
    //     setQuantity(state => state + 1);
    // }

    // const decrementQuantityHandler = () => {
    //     setQuantity(state => state - 1);
    // }

    useEffect(() => {
        if (error) {
            navigate('/404');
        }
    }, [error]);

    return (
        <section>
            <div className="flex-container">
                <ProductHero
                    brand={product.brand}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    quantity={product.quantity}
                    pending={pending}
                />

                <ProductDescription
                    description={product.description}
                    pending={pending}
                />

            </div>

            <ProductCharacteristics
                characteristicsArr={product.characteristics}
                pending={pending}
            />
        </section>

        // <section>
        //     {pending
        //         ? <LoadingSpinner />

        //         : <>
        //             <div className="flex-container">
        //                 <ProductHero
        //                     brand={product.brand}
        //                     name={product.name}
        //                     imageUrl={product.imageUrl}
        //                     price={product.price}
        //                     quantity={product.quantity}
        //                 />

        //                 <ProductDescription
        //                     description={product.description}
        //                 />

        //             </div>

        //             <ProductCharacteristics
        //                 characteristicsArr={product.characteristics}
        //             />
        //         </>
        //     }

        // </section>
    );
}