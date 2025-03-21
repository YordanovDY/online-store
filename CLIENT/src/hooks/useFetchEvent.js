import { useState, useEffect, useRef } from "react";

const hostname = 'http://localhost:3030';

export default function useFetchEvent(url, defaultState = {}, additionalHeaders = {}) {
    const abortRef = useRef();

    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const execute = async () => {
        const options = {
            signal: abortRef.current.signal,
            headers: { ...additionalHeaders },
            credentials: 'include',
        };

        setPending(true);

        let result = {};
        try {
            const response = await fetch(hostname + url, options);

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            result = await response.json();
            setState(result);
            return result;

        } catch (err) {
            result = err;
            setError(err);
            throw new Error(err);

        } finally {
            setPending(false);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        abortRef.current = abortController;

        return () => {
            abortController.abort();
        }
    }, []);

    return { pending, state, error, execute };
}