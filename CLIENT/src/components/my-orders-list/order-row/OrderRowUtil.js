export function getProductsCount(productsArr) {
    let count = 0;

    for (const product of productsArr) {
        count += product.quantity;
    }

    return count;
}