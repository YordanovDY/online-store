import { useRef, useState } from 'react';
import styles from './CatalogNav.module.css';
import { useNavigate } from 'react-router';

export default function CatalogNav({ subcategoryId }) {
    const selectRef = useRef();
    const navigate = useNavigate();
    const [order, setOrder] = useState('asc');

    const [arrowsStyles, setArrowStyles] = useState([
        [styles['arrow'], styles['arrow-selected']],
        [styles['arrow']]
    ]);


    const ascendingHandler = () => {
        if (arrowsStyles[0].length !== 2) {
            setArrowStyles(arrowsStyles.reverse().slice());
        }

        setOrder('asc');

        const criteria = selectRef.current.value;
        const url = `/catalog/${subcategoryId}/subcategory?page=1&sort=${criteria}_asc`;

        navigate(url);
    }

    const descendingHandler = () => {
        if (arrowsStyles[1].length !== 2) {
            setArrowStyles(arrowsStyles.reverse().slice());
        }

        setOrder('desc');

        const criteria = selectRef.current.value;
        const url = `/catalog/${subcategoryId}/subcategory?page=1&sort=${criteria}_desc`;

        navigate(url);
    }

    const selectChangeHandler = (e) => {
        const target = e.currentTarget;
        const sorting = `${target.value}_${order}`;

        const url = `/catalog/${subcategoryId}/subcategory?page=1&sort=${sorting}`;

        navigate(url);
    }

    return (
        <nav className={styles['products-nav']}>
            {/* <div className="button btn-secondary">Filters</div> */}
            <div className={styles['products-nav-sorting']}>
                <label htmlFor="sortBy">Sort By</label>
                <select onChange={selectChangeHandler} ref={selectRef} id="sortBy" className="fancy-input-dark">
                    <option value="price">Price</option>
                    <option value="alphabetical">Alphabetical</option>
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