import styles from './Paginator.module.css';

export default function Paginator({
    pagesCount,
    currentPage,
    onPageChange,
    onPageUp,
    onPageDown,
}) {
    const getPages = () => {
        return new Array(pagesCount).fill(0).map((_, index) => index + 1);
    }

    return (
        <div className={styles['paginator']}>
            <ul className={styles['paginator-ul']}>
                <li
                    className={styles['paginator-ul-li']}
                    onClick={onPageDown}
                >
                    <i className="fa-solid fa-circle-chevron-left" />
                </li>

                {getPages().map(page =>
                    <li
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={page === currentPage
                            ? styles['paginator-ul-li-current']
                            : styles['paginator-ul-li']}
                    >{page}</li>

                )}
                <li
                    className={styles['paginator-ul-li']}
                    onClick={onPageUp}
                >
                    <i className="fa-solid fa-circle-chevron-right" />
                </li>
            </ul>
        </div>
    );
}