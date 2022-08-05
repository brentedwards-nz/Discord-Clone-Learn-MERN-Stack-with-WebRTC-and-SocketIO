import React, { useState, useEffect } from "react";
import AuthBox from '../../shared/components/AuthBox' 
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs"
import RegisterPageFooter from "./RegisterPageFooter" 
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({register}) => {
    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isFormValid, setIsformValid] = useState(false);
    
    useEffect(() => {
        setIsformValid(validateRegisterForm({mail, password, username}));
    },[mail, password, username, setIsformValid]);

    const handleRegister = () => {
        const userDetails = {
            mail, password, username
        }
        register(userDetails, navigate)
    }

    return (
        <AuthBox>
            <Typography variant="h5" sx={{color: "white"}}>
                Create an account
            </Typography>
            <RegisterPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
                username={username}
                setUsername={setUsername}
                
            />
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </AuthBox>
    );
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(RegisterPage);