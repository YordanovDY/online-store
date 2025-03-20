export const ROLES = {
    '679fbd1793b3d9dc7102fe0a': 'Customer',
    '679fbea793b3d9dc7102fe0c': 'Store_Manager',
    '679fbee593b3d9dc7102fe0e': 'Supplier',
    '679fbf1b93b3d9dc7102fe10': 'Admin'
};

export const auth = {
    isCustomer(userRole) {
        return userRole === '679fbd1793b3d9dc7102fe0a';
    },

    isStoreManager(userRole) {
        return userRole === '679fbea793b3d9dc7102fe0c';
    },

    isSupplier(userRole) {
        return userRole === '679fbee593b3d9dc7102fe0e';
    },

    isAdmin(userRole) {
        return userRole === '679fbf1b93b3d9dc7102fe10';
    },

    isOwner(userId, creatorId) {
        return userId === creatorId;
    }
}