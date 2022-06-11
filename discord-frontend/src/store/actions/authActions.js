import * as api from '../../api'

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, history) => dispatchEvent(login(userDetails, history)),
        register: (userDetails, history) => dispatchEvent(register(userDetails, history)),
    }
} 

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}

const login = (userDetails, history) => {
    return async (dispatch) => {
        const response = api.login(userDetails); 
        if(response.error) {
            // Show alert
        }
        else {
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails));
            history.push('/dashboard')
        }
    }
}

const register = (userDetails, history) => {

}