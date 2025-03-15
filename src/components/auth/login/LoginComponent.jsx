import { Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import styles from './LoginComponent.module.css';
import BasicForm from '../../shared/basic-form/BasicForm';
import useMutate from '../../../hooks/useMutate';
import { getCurrentUser } from '../../../services/commonServices';
import { UserContext } from '../../../contexts/UserContext';

export default function LoginComponent() {
    const { responseData, mutate, pending, error } = useMutate('/auth/login', 'POST');
    const { onSuccessLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const inputs = [
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********' }
    ]
    const navToRegisterPageEl = <p>Don't have an account? <Link className="hyperlink" to="/register">Register here.</Link></p>

    //! DUMMY LOGIN (DELETE AFTER TESTING)
    const loginHandler = async () => {
        // Customer
        // const inputData = { email: 'john.doe@gmail.com', password: 'qwerty' }

        // Store Manager
        const inputData = { email: 'chocho@abv.bg', password: '1234' }

        // Admin
        // const inputData = { email: 'administrator@techstore.com', password: 'qwerty' }

        await mutate(inputData);
        const user = await getCurrentUser();
        onSuccessLogin();
        navigate('/');
    }
    //! -----------DUMMY LOGIN------------

    return (
        <section className={styles['login-section']}>
            <BasicForm
                title="Login"
                inputsArray={inputs}
                additionalElement={navToRegisterPageEl}
                buttonText="Login"
                handler={loginHandler}
            />
        </section>
    );
}