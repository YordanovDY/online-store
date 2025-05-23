
import User from '../models/User.js';
import Order from '../models/Order.js';

const userService = {
    getUser,
    getCart,
    setAdditionalData,
    getCartItem,
    addCartItem,
    replaceCartItem,
    removeCartItem,
    emptyCart,
    getOrders,
    getUsersByRole,
}

function getUser(user) {
    return User.findOne({ _id: user.id }, { password: 0, role: 0, cart: 0 });
}

function setAdditionalData(id, fullName, phoneNumber, address) {
    return User.findByIdAndUpdate(
        id,
        { fullName, phoneNumber, address },
        { runValidators: true }
    );
}

async function getCart(user) {
    const result = await User.findOne({ _id: user.id }, { cart: 1 }).populate({ path: 'cart.product', select: '-quantity' });
    return result.cart;
}

async function getCartItem(user, item) {
    const result = await User.findOne({ _id: user.id }, { cart: 1 });
    return result.cart.find(i => i.product.toString() === item);
}

async function addCartItem(user, itemData) {
    const { item, quantity } = itemData;

    const userDoc = await User.findOne({ _id: user.id });
    userDoc.cart.push({ product: item, quantity });

    return await userDoc.save();
}

async function replaceCartItem(user, itemData) {
    const { item, quantity } = itemData;

    return User.updateOne(
        { _id: user.id, "cart.product": item },
        { $set: { "cart.$.quantity": quantity } },
        { runValidators: true }
    );
}

async function removeCartItem(user, productId) {
    return User.updateOne(
        { _id: user.id },
        { $pull: { cart: { product: productId } } }
    );
}

async function emptyCart(user) {
    return User.updateOne(
        { _id: user.id },
        { cart: [] }
    );
}

async function getOrders(user) {
    return Order.find({ recipient: user.id })
}

async function getUsersByRole(roleId) {
    return User.find({ role: roleId }, {
        _id: 1,
        email: 1,
        role: 1
    });
}

export default userService;