export function validateAuth(email, password, repassword = null) {
    const emailPattern = /^[a-zA-z]+[a-zA-Z0-9.]*[a-zA-z0-9]+@[a-zA-z]{2,}\.[a-zA-z]{2,}$/;

    if (!emailPattern.test(email)) {
        throw new Error('Email is invalid!');
    }

    if (!password) {
        throw new Error('Password is required!');
    }

    if (repassword !== null) {
        const match = password === repassword;

        if (!match) {
            throw new Error("Passwords don't match!");
        }
    }

    return true;
}