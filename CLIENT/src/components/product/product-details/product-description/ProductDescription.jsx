import { useState } from 'react';
import LoadingSpinner from '../../../shared/loading-spinner/LoadingSpinner';
import styles from './ProductDescription.module.css';
import { useUserContext } from '../../../../contexts/UserContext';
import { auth } from '../../../../constants/roles';
import { Link, useNavigate } from 'react-router';
import OverlayModal from '../../../shared/overlay/OverlayModal';
import useMutate from '../../../../hooks/useMutate';
import QtyForm from './qty-form/QtyForm';

export default function ProductDescription({ description, creator, pending, productId }) {
    const { user } = useUserContext();
    const { mutate } = useMutate(`/products/catalog/${productId}`, 'DELETE');
    const navigate = useNavigate();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const setOpenDeleteModal = (status) => {
        setIsDeleteModalOpen(status)
    }

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    }

    const deleteHandler = async () => {
        await mutate();
        navigate('/');
    }

    const controlButtons =
        auth.isOwner(user?.id, creator) || auth.isAdmin(user?.role)
            ? <div className="d-flex gap-20">
                <Link className="button btn-secondary" to={`/products/${productId}/edit`}>
                    Update
                </Link>
                <button className="button btn-secondary" onClick={openDeleteModal}>
                    Delete
                </button>
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
                    <QtyForm productId={productId} />

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
        </article>
    );
}