import { ROLE_IDs } from "../../../constants/roles";
import BasicForm from "../../shared/basic-form/BasicForm";

export default function ProfileCreate() {
    const inputs = [
        { name: 'role', label: 'Role', type: 'select', value: '', options: ['Customer', 'Store Manager', 'Supplier', 'Admin'] },
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com', value: '' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********', value: '' },
        { name: 'repassword', label: 'Repeat Password', type: 'password', placeholder: '***********', value: '' }
    ]

    const submitHandler = (formData) => {
        const data = Object.fromEntries(formData);

        const roleId = ROLE_IDs[data.role];

        const payload = { ...data, role: roleId };
        
        console.log(payload);
    }

    return (
        <section>
            <BasicForm
                title="Create Profile"
                inputsArray={inputs}
                buttonText="Create"
                submitHandler={submitHandler}
            />
        </section>
    );
}