import { useState } from 'react';
import LoadingSpinner from '../../../shared/loading-spinner/LoadingSpinner';
import styles from './ProductDescription.module.css';
import { useUserContext } from '../../../../contexts/UserContext';
import { Link, useNavigate } from 'react-router';
import OverlayModal from '../../../shared/overlay/OverlayModal';
import useMutate from '../../../../hooks/useMutate';
import QtyForm from './qty-form/QtyForm';
import useNotification from '../../../../hooks/useNotification';

export default function ProductDescription({ description, creator, pending, productId, quantity, onQuantityUpdate }) {
    const baseUrl = `/products/catalog/${productId}`;

    const { user } = useUserContext();
    const { mutate: onDelete } = useMutate(baseUrl, 'DELETE');
    const { mutate: onLoadGoods } = useMutate(baseUrl, 'PUT');
    const { notify, notificationAlert } = useNotification();
    const navigate = useNavigate();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isLoadGoodsModalOpen, setIsLoadGoodsModalOpen] = useState(false);

    const setOpenDeleteModal = (status) => {
        setIsDeleteModalOpen(status)
    }

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    }

    const setLoadGoodsModal = (status) => {
        setIsLoadGoodsModalOpen(status)
    }

    const openLoadGoodsModal = () => {
        setIsLoadGoodsModalOpen(true);
    }

    const deleteHandler = async () => {
        await onDelete();
        navigate('/');
    }

    const loadGoodsHandler = async (formData) => {
        const addedQty = Number(formData.get('quantity'));

        if (isNaN(addedQty)) {
            return notify('Quantity must be a positive integer!', 'error');
        }


        if (addedQty < 1) {
            return notify('Quantity must be a positive integer!', 'error');
        }

        if (!Number.isInteger(addedQty)) {
            return notify('Quantity must be a positive integer!', 'error');
        }

        const newQuantity = quantity + addedQty;
        const payload = { quantity: newQuantity };

        try {
            await onLoadGoods(payload);
            onQuantityUpdate(newQuantity);
            setIsLoadGoodsModalOpen(false);

        } catch (err) {
            notify(err.message, 'error');
        }
    }

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
                    Load Goods
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
                title="Load Goods"
                message="Increase stock quantity"
                actionButtonName="Submit"
                handler={loadGoodsHandler}
                inputs={[{ name: 'quantity', label: 'Quantity you want to add:', type: 'text', placeholder: '', value: '' }]}
            />
            {notificationAlert}
        </article>
    );
}