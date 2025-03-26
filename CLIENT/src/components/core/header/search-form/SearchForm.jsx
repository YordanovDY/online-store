import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './SearchForm.module.css';

export default function SearchForm() {
    const [formStyle, setFormStyle] = useState(styles['s-form-hidden']);
    const [buttonStyle, setButtonStyle] = useState('button btn-secondary breathing');
    const navigate = useNavigate()

    const showSearchHandler = () => {
        setButtonStyle(styles['b-button-hidden']);
        setFormStyle(styles['s-form-shown']);
    }

    const submitHandler = (formData) => {
        const query = formData.get('search');
        navigate(`/catalog/search?query=${query}`);
    }

    return (
        <li>
            <div className={formStyle}>
                <form action={submitHandler}>
                    <input className="fancy-input-light" type="text" name="search"
                        placeholder="What are you looking for?" />
                    <button className="button btn-secondary">Search</button>
                </form>
            </div>

            <div
                className={buttonStyle}
                onMouseEnter={showSearchHandler}
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </li>
    )
}