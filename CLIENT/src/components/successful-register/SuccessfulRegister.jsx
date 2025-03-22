import { Link, useParams } from "react-router";
import './SuccessfulRegister.css';

export default function SuccessfulRegister() {
    const { email } = useParams();

    return (
        <section className="d-flex f-direction-column gap-50 ai-center padding-20">
            <h2 className="large-header">Congratulations, {email}!</h2>
            <i className="fa-solid fa-circle-check success" />
            <h3 className="sub-header">Your profile has been successfully created and is ready to use.</h3>
            <h4>Welcome to our store, your go-to destination for the latest tech and home appliances!</h4>
            <p>Before you start exploring, please confirm your registration by logging into your account.</p>
            <Link className="button btn-primary" to="/login">Confirm your account</Link>
        </section>
    );
}