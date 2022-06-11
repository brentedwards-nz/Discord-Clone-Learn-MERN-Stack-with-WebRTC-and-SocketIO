import React, { useState, useEffect } from "react";
import AuthBox from '../../shared/components/AuthBox' 
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs"
import RegisterPageFooter from "./RegisterPageFooter" 
import { validateRegisterForm } from "../../shared/utils/validators";

const RegisterPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isFormValid, setIsformValid] = useState(false);
    
    useEffect(() => {
        setIsformValid(validateRegisterForm({mail, password, username}));
    },[mail, password, username, setIsformValid]);

    const handleRegister = () => {
        console.log('Register')
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

export default RegisterPage;