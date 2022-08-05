import * as api from '../../api'

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

export const getActions = (dispatch) => {
    return {
        register: (userDetails, history) => dispatch(register(userDetails, history)),
        login: (userDetails, history) => dispatch(login(userDetails, history)),
    };
};

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    };
};

const login = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.login(userDetails); 
        console.log("login: " + response);
        if(response.error) {
            console.log("login: response.error");
        }
        else {
            const userDetails = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails));
            history("/dashboard")
        }
    };
};

const register = (userDetails, history) => {
    return async (dispatch) => {
      const response = await api.register(userDetails);
      console.log(response);
      if (response.error) {
        console.log("register: " + response.error);
      } else {
        const userDetails  = response?.data;
        localStorage.setItem("user", JSON.stringify(userDetails));
        dispatch(setUserDetails(userDetails));
        history("/dashboard");
      }
    };
  };