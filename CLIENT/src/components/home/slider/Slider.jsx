import { useEffect, useState } from 'react';
import styles from './Slider.module.css';

export default function Slider() {
    const images = [
        '/images/slider-pc.png',
        '/images/slider-smartphones.png',
        '/images/slider-appliances.png',
        '/images/slider-scooter.png'
    ];

    const imageHeaders = [
        'PCs, Laptops and Peripheral',
        'Smartphones and Tablets',
        'Home Appliances',
        'Electric Vehicles'
    ];

    const [imageIndex, setImageIndex] = useState(0);
    const [headerIndex, setHeaderIndex] = useState(0);
    const [isManual, setIsManual] = useState(false);

    const getClassName = (index) => {
        if (index === imageIndex) {
            return [styles['slides-dot'], styles['selected']];
        }

        return [styles['slides-dot']];
    }

    const changeSlideHandler = (e) => {
        const id = e.currentTarget.id;
        const index = Number(id.split('_').at(1));

        setImageIndex(index);
        setHeaderIndex(index);
        setIsManual(true);
    }

    if (imageIndex > 3) {
        setImageIndex(0);
        setHeaderIndex(0);
    }

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setImageIndex(index => index + 1);
                setHeaderIndex(index => index + 1);
                setIsManual(false);
            }, 5000);
        }

    }, [imageIndex, isManual]);

    return (
        <section id="slideshow" className="d-flex f-direction-column gap-10">
            <h1 className="fancy-header">Welcome to our IT and Tech Store</h1>
            <div className={styles['slides']}>
                <h3 className={styles['slides-text']}>{imageHeaders[headerIndex]}</h3>
                <img className={styles['slides-img']}
                    src={images[imageIndex]} />
                <div className={styles['slides-dots-container']}>
                    {images.map((image, index) =>
                        <div
                            key={'index_' + index}
                            id={'index_' + index}
                            className={getClassName(index).join(' ')}
                            onClick={changeSlideHandler}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}