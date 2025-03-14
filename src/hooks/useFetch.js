import { useState, useEffect } from "react";

const hostname = 'http://localhost:3030';

export default function useFetch(url, defaultState = {}, additionalHeaders = {}) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const options = {
            signal,
            headers: { ...additionalHeaders },
            credentials: 'include',
        };

        setPending(true);

        fetch(hostname + url, options)
            .then(response => {

                if (!response.ok) {
                    const error = response.json();
                    throw new Error(error.message);
                }

                if (response.status === 204) {
                    return response;

                } else {
                    return response.json();
                }

            })
            .then(result => {
                setState(result);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                setError(err);
            })
            .finally(() => {
                setPending(false);
            })

        return () => {
            abortController.abort();
        }
    }, [url])

    return [pending, state, error];
}