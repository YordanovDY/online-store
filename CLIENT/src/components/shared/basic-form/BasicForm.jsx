import { useFormStatus } from 'react-dom';
import FormInput from './form-input/FormInput';
import styles from './BasicForm.module.css';

export default function BasicForm({
    title,
    inputsArray,
    additionalElement,
    buttonText,
    submitHandler,
    additionalFieldset,
    hasMainFieldset = false
}) {
    const mainInputs = inputsArray.map(input => <FormInput
        key={input.type === 'radio' ? input.name + '_' + input.label : input.name}
        input={input}
    />)

    return (
        <div className={styles['form-section']}>
            <form action={submitHandler} className={styles['form']}>
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
                        {additionalFieldset.map(input => <FormInput
                            key={input.type === 'radio' ? input.name + '_' + input.label : input.name}
                            input={input}
                        />)}
                    </fieldset>
                }


                {additionalElement ? additionalElement : ''}
                <Submit buttonText={buttonText} />
            </form>
        </div>
    );
}

function Submit({ buttonText }) {
    const { pending } = useFormStatus();
    return <button disabled={pending} className="button btn-primary">{buttonText || 'Submit'}</button>
}