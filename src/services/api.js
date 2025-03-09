const hostname = 'http://localhost:3030';

async function requester(method, endpoint, signal, customHeaders, data) {
    const option = {
        method,
        headers: { ...customHeaders },
        signal
    };

    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    // TODO: Append user token

    try {
        const response = await fetch(hostname + endpoint, option);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;

        } else {
            return response.json();
        }

    } catch (err) {
        throw err;
    }

}

const get = (endpoint, signal, customHeaders = {}) => requester('GET', endpoint, signal, customHeaders);
const post = (endpoint, data, signal, customHeaders = {}) => requester('POST', endpoint, signal, customHeaders, data);
const put = (endpoint, data, signal, customHeaders = {}) => requester('PUT', endpoint, signal, customHeaders, data);
const del = (endpoint, signal, customHeaders = {}) => requester('DELETE', endpoint, signal, customHeaders);

const api = {
    get,
    post,
    put,
    del
};

export default api;