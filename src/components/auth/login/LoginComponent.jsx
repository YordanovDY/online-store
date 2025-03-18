import { Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import styles from './LoginComponent.module.css';
import BasicForm from '../../shared/basic-form/BasicForm';
import useMutate from '../../../hooks/useMutate';
import { UserContext } from '../../../contexts/UserContext';
import useForm from '../../../hooks/useForm';

export default function LoginComponent() {
    const { mutate } = useMutate('/auth/login', 'POST');
    const { onSuccessLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const inputs = [
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com', value: '' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********', value: '' }
    ]

    const { values, changeHandler } = useForm(inputs);

    const navToRegisterPageEl = <p>Don't have an account? <Link className="hyperlink" to="/register">Register here.</Link></p>

    //! DUMMY LOGIN (DELETE AFTER TESTING)
    const loginHandler = async (e) => {
        e.preventDefault();

        // Customer
        const inputData = { email: 'john.doe@gmail.com', password: 'qwerty' }

        // Store Manager
        // const inputData = { email: 'chocho@abv.bg', password: '1234' }

        // Admin
        // const inputData = { email: 'administrator@techstore.com', password: 'qwerty' }

        await mutate(inputData);
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
                submitHandler={loginHandler}
                changeHandler={changeHandler}
                values={values}
            />
        </section>
    );
}