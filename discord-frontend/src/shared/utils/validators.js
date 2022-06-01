export const validateLoginForm = ({mail, password}) => {
    const isMailValid = validateEmail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
}

const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 12;
}

const validateEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}