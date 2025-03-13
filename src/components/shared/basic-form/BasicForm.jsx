import styles from './BasicForm.module.css';
import FormInput from './form-input/FormInput';

export default function BasicForm({
    title,
    inputsArray,
    additionalElement,
    buttonText,
    additionalFieldset,
    hasMainFieldset = false
}) {
    const mainInputs = inputsArray.map(input => <FormInput key={input.name} input={input} />)

    return (
        <div className={styles['form-section']}>
            <form className={styles['form']}>
                <h2 className={styles['form-header']}>{title}</h2>
                {hasMainFieldset
                    ? <fieldset className={styles['fieldset']}>
                        <h4 className={styles['char-header']}>Main</h4>
                        {mainInputs}
                    </fieldset>

                    : mainInputs
                }

                {additionalFieldset &&
                    <fieldset className={styles['fieldset']}>
                        <h4 className={styles['char-header']}>Characteristics</h4>
                        {additionalFieldset.map(input => <FormInput key={input.name} input={input} />)}
                    </fieldset>
                }


                {additionalElement ? additionalElement : ''}
                <button className="button btn-primary">{buttonText || 'Submit'}</button>
            </form>
        </div>
    );
}