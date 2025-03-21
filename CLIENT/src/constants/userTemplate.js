const userTemplate = {
    id: '',
    email: '',
    role: '',

    isCustomer() {
        return this.role === '679fbd1793b3d9dc7102fe0a';
    },

    isStoreManager() {
        return this.role === '679fbea793b3d9dc7102fe0c';
    },

    isSupplier() {
        return this.role === '679fbee593b3d9dc7102fe0e';
    },

    isAdmin() {
        return this.role === '679fbf1b93b3d9dc7102fe10';
    },

    isOwner(creatorId) {
        return this.id === creatorId;
    },

    isAuthenticated() {
        return this.id ? true : false;
    }
}

export default userTemplate;