export const validateLoginForm = ({mail, password}) => {
    const isMailValid = validateEmail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
}

export const validateRegisterForm = ({mail, password, username}) => {
    const isMailValid = validateEmail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);

    return isMailValid && isPasswordValid && isUsernameValid;
}

const validatePassword = (password) => {
    return password.length > 5 && password.length < 13;
}

const validateEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}