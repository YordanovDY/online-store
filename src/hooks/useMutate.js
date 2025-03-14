import { useState } from "react";

const hostname = 'http://localhost:3030';

export default function useMutate(url, method, additionalHeaders = {}) {
    const [pending, setPending] = useState(false);
    const [responseData, setResponseData] = useState({});
    const [error, setError] = useState(null);

    const mutate = async (data) => {
        const options = {
            method,
            headers: { ...additionalHeaders },
            credentials: 'include',
        };

        if (data) {
            options['headers']['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        setPending(true);

        let result = {};
        try {
            const response = await fetch(hostname + url, options);

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            result = await response.json();
            setResponseData(result);
        } catch (err) {
            result = err;
            setError(err);

        } finally {
            setPending(false);
            return result;
        }
    }

    return {
        responseData,
        mutate,
        pending,
        error
    }
}