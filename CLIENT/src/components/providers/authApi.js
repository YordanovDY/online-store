import { useEffect, useState } from "react"
import userTemplate from "../../constants/userTemplate";
import api from "../../services/api";

export function useAuth() {
    const [user, setUser] = useState(userTemplate);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setPending(true);

        api.get('/auth/user', signal)
            .then(result => {
                setUser(state => ({ ...state, id: result.id, email: result.email, role: result.role }));
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                console.error(err);
            })
            .finally(() => {
                setPending(false);
            })

        return () => {
            abortController.abort();
        }
    }, []);

    const setUserData = (userData) => {
        setUser(state => ({ ...state, id: userData.id, email: userData.email, role: userData.role }));
    }

    return {
        pending,
        user,
        setUserData
    }
}