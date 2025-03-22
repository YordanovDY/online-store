import LoadingSpinner from '../../../shared/loading-spinner/LoadingSpinner';
import styles from './ProductDescription.module.css';
import { useUserContext } from '../../../../contexts/UserContext';
import { Link } from 'react-router';
import OverlayModal from '../../../shared/overlay/OverlayModal';
import QtyForm from './qty-form/QtyForm';
import { useInteractions } from '../../productApi';

export default function ProductDescription({ description, creator, pending, productId, quantity, onQuantityUpdate }) {
    const { user } = useUserContext();
    
    const {
        notificationAlert, isDeleteModalOpen, isLoadGoodsModalOpen,
        openDeleteModal, openLoadGoodsModal, setLoadGoodsModal, setOpenDeleteModal,
        deleteHandler, loadGoodsHandler
    } = useInteractions(productId, quantity, onQuantityUpdate);

    const controlButtons =
        user.isOwner(creator) || user.isAdmin()
            ? <div className="d-flex gap-20">
                <Link className="button btn-secondary" to={`/products/${productId}/edit`}>
                    Update
                </Link>
                <button className="button btn-secondary" onClick={openDeleteModal}>
                    Delete
                </button>
                <button className="button btn-secondary" onClick={openLoadGoodsModal}>
                    Increase Quantity
                </button>
            </div>
            : ''

    return (
        <article className={styles['product-description']}>
            <h4>Product Description</h4>
            {pending

                ? <LoadingSpinner />

                : <>
                    <p>{description}</p>
                    {user.isCustomer() && <QtyForm productId={productId} />}

                    {controlButtons}

                </>
            }
            <OverlayModal
                open={isDeleteModalOpen}
                setOpen={setOpenDeleteModal}
                title="Delete Product"
                message="Are you sure you want to delete this product from the catalog?"
                actionButtonName="Delete"
                handler={deleteHandler}
            />

            <OverlayModal
                open={isLoadGoodsModalOpen}
                setOpen={setLoadGoodsModal}
                title="Increase Quantity"
                message="Increase stock quantity"
                actionButtonName="Submit"
                handler={loadGoodsHandler}
                inputs={[{ name: 'quantity', label: 'Quantity you want to add:', type: 'text', placeholder: '', value: '' }]}
            />
            {notificationAlert}
        </article>
    );
}