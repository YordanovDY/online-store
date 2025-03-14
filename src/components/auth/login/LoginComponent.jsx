import { Link } from 'react-router';
import styles from './LoginComponent.module.css';
import BasicForm from '../../shared/basic-form/BasicForm';
import useMutate from '../../../hooks/useMutate';
import { getCurrentUser } from './LoginService';

export default function LoginComponent() {
    const { responseData, mutate, pending, error } = useMutate('/auth/login', 'POST');

    const inputs = [
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********' }
    ]
    const navToRegisterPageEl = <p>Don't have an account? <Link className="hyperlink" to="/register">Register here.</Link></p>

    //! DUMMY LOGIN (DELETE AFTER TESTING)
    const loginHandler = async () => {
        const inputData = { email: 'john.doe@gmail.com', password: 'qwerty' }
        await mutate(inputData);
        const user = await getCurrentUser();

        console.log(user);
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
            {pending ? <p>Pending...</p> : <p>{JSON.stringify(responseData)}</p>}
        </section>
    );
}