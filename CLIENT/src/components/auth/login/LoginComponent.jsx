import { Link, useNavigate } from 'react-router';
import styles from './LoginComponent.module.css';
import ControlledForm from '../../shared/controlled-form/ControlledForm';
import useMutate from '../../../hooks/useMutate';
import useForm from '../../../hooks/useForm';
import { useUserContext } from '../../../contexts/UserContext';
import useNotification from '../../../hooks/useNotification';
import { validateAuth } from '../validatorUtil';

export default function LoginComponent() {
    const { mutate, pending } = useMutate('/auth/login', 'POST');
    const { setUserData } = useUserContext();
    const { notificationAlert, notify } = useNotification();
    const navigate = useNavigate();

    const inputs = [
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com', value: '' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********', value: '' }
    ]

    const { values, changeHandler } = useForm(inputs);

    const navToRegisterPageEl = <p>Do not have an account? <Link className="hyperlink" to="/auth/register">Register here.</Link></p>

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            validateAuth(values.email, values.password);

        } catch (err) {
            return notify(err.message, 'error');
        }

        try {
            const result = await mutate(values);
            const userData = result.result.user;
            setUserData(userData);
            navigate('/');

        } catch (err) {
            values.password = '';
            return notify(err.message, 'error');
        }
    }

    return (
        <section className={styles['login-section']}>
            <ControlledForm
                title="Login"
                inputsArray={inputs}
                additionalElement={navToRegisterPageEl}
                buttonText="Login"
                submitHandler={loginHandler}
                changeHandler={changeHandler}
                values={values}
                pending={pending}
            />
            {notificationAlert}
        </section>
    );
}