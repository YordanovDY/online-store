import { Link } from 'react-router';
import styles from './LoginComponent.module.css';
export default function LoginComponent() {
   return (
      <section className={styles['form-section']}>
         <form className={styles['form']}>
            <h2 className={styles['form-header']}>Login</h2>
            <div className={styles['field-border']}>
               <div className={styles['field']}>
                  <label className={styles['label']} htmlFor="email">Email</label>
                  <input className="fancy-input-dark" type="text" id="email" name="email" placeholder="john.doe@gmail.com" />
               </div>
            </div>

            <div className={styles['field-border']}>
               <div className={styles['field']}>
                  <label className={styles['label']} htmlFor="password">Password</label>
                  <input className="fancy-input-dark" type="password" id="password" name="password" placeholder="**********" />
               </div>
            </div>
            <p>Don't have an account? <Link className="hyperlink" to="/register">Register here.</Link></p>
            <button className="button btn-primary">Login</button>
         </form>
      </section>
   );
}