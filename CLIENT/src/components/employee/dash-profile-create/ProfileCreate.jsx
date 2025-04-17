import { ROLE_IDs } from "../../../constants/roles";
import useMutate from "../../../hooks/useMutate";
import BasicForm from "../../shared/basic-form/BasicForm";
import useNotification from "../../../hooks/useNotification";

export default function ProfileCreate() {
    const { mutate } = useMutate('/auth/create', 'POST');
    const { notificationAlert, notify } = useNotification();

    const inputs = [
        { name: 'role', label: 'Role', type: 'select', value: '', options: ['Customer', 'Store Manager', 'Supplier', 'Admin'] },
        { name: 'email', label: 'Email', type: 'text', placeholder: 'john.doe@gmail.com', value: '' },
        { name: 'password', label: 'Password', type: 'password', placeholder: '***********', value: '' },
        { name: 'repassword', label: 'Repeat Password', type: 'password', placeholder: '***********', value: '' }
    ]

    const submitHandler = async (formData) => {
        const data = Object.fromEntries(formData);

        const roleId = ROLE_IDs[data.role];

        const payload = { ...data, role: roleId };

        if (payload.password !== payload.repassword) {
            return notify('Passwords mismatch!', 'error');
        }

        try {
            const result = await mutate({ email: payload.email, password: payload.password, role: payload.role });
            const email = result.user.email;
            notify(`The account of ${email} was created successfully.`, 'success');

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return (
        <section>
            <BasicForm
                title="Create Profile"
                inputsArray={inputs}
                buttonText="Create"
                submitHandler={submitHandler}
            />
            {notificationAlert}
        </section>
    );
}