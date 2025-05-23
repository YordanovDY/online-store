import { Link, useNavigate } from 'react-router';
import ControlledForm from '../../shared/controlled-form/ControlledForm';
import styles from './RegisterComponent.module.css';
import useForm from '../../../hooks/useForm';
import useNotification from '../../../hooks/useNotification';
import useMutate from '../../../hooks/useMutate';
import { validateAuth } from '../validatorUtil';

export default function RegisterComponent() {
   const { mutate, pending } = useMutate('/auth/register', 'POST');
   const { notificationAlert, notify } = useNotification();
   const navigate = useNavigate();

   const inputs = [
      { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com', value: '' },
      { name: 'password', label: 'Password', type: 'password', placeholder: '***********', value: '' },
      { name: 'repassword', label: 'Repeat Password', type: 'password', placeholder: '***********', value: '' }
   ]

   const { values, changeHandler } = useForm(inputs);

   const navToLoginPageEl = <p>Already have an account? <Link className="hyperlink" to="/auth/login">Login here.</Link></p>

   const registerHandler = async (e) => {
      e.preventDefault();

      try {
         try {
            validateAuth(values.email, values.password, values.repassword);

         } catch (err) {
            values.password = '';
            values.repassword = '';
            return notify(err.message, 'error');
         }

         const result = await mutate({ email: values.email, password: values.password });
         const email = result.user.email;

         navigate(`/auth/register-confirmation/${email}`);

      } catch (err) {
         values.password = '';
         values.repassword = '';
         return notify(err.message, 'error');
      }
   }

   return (
      <section className={styles['register-section']}>
         <ControlledForm
            title="Register"
            inputsArray={inputs}
            additionalElement={navToLoginPageEl}
            buttonText="Register"
            values={values}
            changeHandler={changeHandler}
            submitHandler={registerHandler}
            pending={pending}
         />
         {notificationAlert}
      </section>
   );
}