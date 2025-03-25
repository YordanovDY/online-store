import { useNavigate } from 'react-router';
import useFetch from "../../hooks/useFetch";
import useMutate from "../../hooks/useMutate";
import useNotification from "../../hooks/useNotification";
import BasicForm from "../shared/basic-form/BasicForm";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import styles from './ContactDetailsForm.module.css';

export default function ContactDetailsForm() {
    const [pending, userData, error] = useFetch('/user/data');
    const { notificationAlert, notify } = useNotification();
    const { mutate } = useMutate('/user/data', 'PUT');
    const navigate = useNavigate();

    const inputs = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', value: userData.fullName },
        { name: 'phoneNumber', label: 'Phone Number', type: 'text', placeholder: '0000000000', value: userData.phoneNumber },
        { name: 'address', label: 'Address', type: 'text', placeholder: '742 Tomas Parkway, South Emmiestad, MO98911', value: userData.address },
    ]

    const submitHandler = async (formData) => {
        const data = Object.fromEntries(formData);

        try {
            await mutate(data);
            navigate('/profile');

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return (
        <section className={styles['contact-details-section']}>
            {pending
                ? <LoadingSpinner />
                : <BasicForm
                    title="Fill contact data"
                    inputsArray={inputs}
                    submitHandler={submitHandler}
                    buttonText="Submit"
                />
            }
            {notificationAlert}
        </section>
    );
}