import { useState } from 'react';
import styles from './CatalogNav.module.css';

export default function CatalogNav() {
    const [arrowsStyles, setArrowStyles] = useState([
        [styles['arrow'], styles['arrow-selected']],
        [styles['arrow']]
    ]);

    const ascendingHandler = () => {
        if (arrowsStyles[0].length === 2) {
            return;
        }

        setArrowStyles(arrowsStyles.reverse().slice());
    }

    const descendingHandler = () => {
        if (arrowsStyles[1].length === 2) {
            return;
        }

        setArrowStyles(arrowsStyles.reverse().slice());
    }

    return (
        <nav className={styles['products-nav']}>
            <div className="button btn-secondary">Filters</div>
            <div className={styles['products-nav-sorting']}>
                <label htmlFor="sortBy">Sort By</label>
                <select id="sortBy" className="fancy-input-dark">
                    <option>Price</option>
                    <option>Alphabetical</option>
                </select>
                <div className="d-flex gap-20 ai-center">
                    <div onClick={ascendingHandler} className={arrowsStyles.at(0).join(' ')}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>

                    <div onClick={descendingHandler} className={arrowsStyles.at(1).join(' ')}>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}