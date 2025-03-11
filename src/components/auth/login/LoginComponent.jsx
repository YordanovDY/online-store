import { Link } from 'react-router';
import styles from './LoginComponent.module.css';
import BasicForm from '../../shared/basic-form/BasicForm';
export default function LoginComponent() {
   const inputs = [
      { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com' },
      { name: 'password', label: 'Password', type: 'password', placeholder: '***********' }
   ]
   const navToRegisterPageEl = <p>Don't have an account? <Link className="hyperlink" to="/register">Register here.</Link></p>
   return (
      <section className={styles['login-section']}>
         <BasicForm
            title="Login"
            inputsArray={inputs}
            additionalElement={navToRegisterPageEl}
            buttonText="Login"
         />
      </section>
   );
}