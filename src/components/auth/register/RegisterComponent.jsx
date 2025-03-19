import { Link } from 'react-router';
import ControlledForm from '../../shared/controlled-form/ControlledForm';
import styles from './RegisterComponent.module.css';

export default function RegisterComponent() {

   const inputs = [
      { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com' },
      { name: 'password', label: 'Password', type: 'password', placeholder: '***********' },
      { name: 'repassword', label: 'Repeat Password', type: 'password', placeholder: '***********' }
   ]

   const navToLoginPageEl = <p>Already have an account? <Link className="hyperlink" to="/login">Login here.</Link></p>
   return (
      <section className={styles['register-section']}>
         <ControlledForm
            title="Register"
            inputsArray={inputs}
            additionalElement={navToLoginPageEl}
            buttonText="Register"
         />
      </section>
   );
}