const hostname = 'http://localhost:3030';

async function requester(method, endpoint, customHeaders, data) {
    const option = {
        method,
        headers: { ...customHeaders }
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

        return response;

    } catch (err) {
        throw err;
    }

}

const get = (endpoint, customHeaders = {}) => requester('GET', endpoint, customHeaders);
const post = (endpoint, data, customHeaders = {}) => requester('POST', endpoint, customHeaders, data);
const put = (endpoint, data, customHeaders = {}) => requester('PUT', endpoint, customHeaders, data);
const del = (endpoint, customHeaders = {}) => requester('DELETE', endpoint, customHeaders);

const api = {
    get,
    post,
    put,
    del
};

export default api;