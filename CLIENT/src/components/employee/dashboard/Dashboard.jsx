import { Link } from 'react-router';
import { useUserContext } from '../../../contexts/UserContext';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const { user } = useUserContext();
    return (
        <section className={styles['dashboard-section']}>
            <h2 className="fancy-header">Dashboard</h2>
            <div className="d-flex f-direction-column gap-20">

                {(user.isStoreManager() || user.isAdmin()) &&
                    <article className="d-flex f-direction-column gap-10">
                        <h4 className="header-saparator">STORE MANAGER</h4>
                        <div className="d-flex gap-20 f-wrap">
                            <Link to="/dashboard/create-product" className="tile-button">Create Product</Link>
                            <Link to="/dashboard/product-managment" className="tile-button">Product Managment</Link>
                            <Link to="/dashboard/orders-processing" className="tile-button">Orders Processing</Link>
                        </div>
                    </article>
                }

                {(user.isSupplier() || user.isAdmin()) &&
                    <article className="d-flex f-direction-column gap-10">
                        <h4 className="header-saparator">SUPPLIER</h4>
                        <div className="d-flex gap-20">
                            <Link className="tile-button tile-disabled" title="This feature is not yet available">Delivery Managment</Link>
                        </div>
                    </article>
                }


                {user.isAdmin() &&
                    <article className="d-flex f-direction-column gap-10">
                        <h4 className="header-saparator">ADMIN</h4>
                        <div className="d-flex gap-20">
                            <Link to="/dashboard/create-profile" className="tile-button">Create Profiles</Link>
                        </div>
                    </article>
                }

            </div>
        </section>
    );
}