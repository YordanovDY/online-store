import api from "./api";

const productDetailsUrl = (productId) => `/products/catalog/${productId}`

export function getProductDetails(productId, signal) {
    return api.get(productDetailsUrl(productId), signal);
}

export async function getCurrentUser(signal = null) {
    const res = await api.get('/auth/user', signal);
    return res.result.user;
}  