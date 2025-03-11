import { Link } from 'react-router';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import styles from './Paginator.module.css';

export default function Paginator({
    isLoading,
    pagesCount,
    currentPage,
    subcategoryId
}) {
    const getPages = () => {
        return new Array(pagesCount).fill(0).map((_, index) => index + 1);
    }

    return (
        <div className={styles['paginator']}>
            {isLoading
                ? <LoadingSpinner />
                : <ul className={styles['paginator-ul']}>
                    {
                        currentPage > 1 && <li>

                            <Link className={styles['paginator-ul-li-link']} to={`/catalog/${subcategoryId}?page=${currentPage - 1}`}>
                                <i className="fa-solid fa-circle-chevron-left" />
                            </Link>
                        </li>
                    }


                    {getPages().map(page =>
                        <li key={page}>
                            <Link
                                to={`/catalog/${subcategoryId}?page=${page}`}
                                className={page === currentPage
                                    ? styles['paginator-ul-li-link-current']
                                    : styles['paginator-ul-li-link']}
                            >
                                {page}
                            </Link>
                        </li>

                    )}

                    {
                        pagesCount > currentPage && <li>

                            <Link className={styles['paginator-ul-li-link']} to={`/catalog/${subcategoryId}?page=${currentPage + 1}`}>
                                <i className="fa-solid fa-circle-chevron-right" />
                            </Link>
                        </li>
                    }

                </ul>
            }

        </div>
    );
}