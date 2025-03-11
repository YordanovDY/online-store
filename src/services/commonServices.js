import api from "./api";

const productDetailsUrl = (productId) => `/products/catalog/${productId}`

export function getProductDetails(productId, signal) {
    return api.get(productDetailsUrl(productId), signal);
}