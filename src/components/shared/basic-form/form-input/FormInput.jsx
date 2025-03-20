import styles from './FormInput.module.css';
import Input from './input/Input';

export default function FormInput({ input }) {
    return (
        <div className={styles['field-border']}>
            <div className={styles['field']}>
                <label className={styles['label']} htmlFor={input.name}>{input.label}</label>
                <Input input={input} />
            </div>
        </div>
    );
}