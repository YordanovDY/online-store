import { useContext } from 'react';
import LoadingSpinner from '../../shared/loading-spinner/LoadingSpinner';
import styles from './ProductDescription.module.css';
import { UserContext } from '../../../contexts/UserContext';
import { auth } from '../../../constants/roles';

export default function ProductDescription({ description, creator, pending }) {
    const { user } = useContext(UserContext);

    const controlButtons =
        auth.isOwner(user?.id, creator) || auth.isAdmin(user?.role)
            ? <div className="d-flex gap-20">
                <a className="button btn-secondary" href="#">
                    Update
                </a>
                <a className="button btn-secondary" href="#">
                    Delete
                </a>
                <a className="button btn-secondary" href="#">
                    Load Goods
                </a>
            </div>
            : ''

    return (
        <article className={styles['product-description']}>
            <h4>Product Description</h4>
            {pending

                ? <LoadingSpinner />

                : <>
                    <p>{description}</p>
                    <form className="max-w-2xl mx-auto d-flex gap-20 ai-center">
                        <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
                        <div className="relative flex items-center max-w-[11rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue='1' required />

                            <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                        <button className="button btn-primary">
                            <i className="fa-solid fa-cart-shopping" />
                            <span>Add to Cart</span>
                        </button>
                    </form>

                    {controlButtons}

                </>
            }

        </article>
    );
}