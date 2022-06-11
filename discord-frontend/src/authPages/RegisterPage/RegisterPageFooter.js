import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import {useNavigate} from 'react-router-dom';
import { Tooltip  } from "@mui/material";

const getFormValidMessage = () => {
    return "Press to register"
}
const getFormNotValidMessage = () => {
    return "Username should contain between 3 and 12 characters and password should contain between 6 and 12 characters. Also correct e-mail address should be provided"
}

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
    const navigate = useNavigate();
    const handlePushToLoginPage = () => {
        navigate("/login")
    };
    
    return (
        <>
        <Tooltip 
        title={isFormValid ? getFormValidMessage(): getFormNotValidMessage()}
        >
            <div>
                <CustomPrimaryButton 
                    label='Register' 
                    additionalStyles = {{
                        marginTop: '30px'
                    }}
                    disabled = {!isFormValid}
                    onClick = {handleRegister}
                />        
            </div>
        </Tooltip>
        <RedirectInfo
            text=''
            redirectText='Already have an account?'
            additionalStyles={{marginTop: '5px'}}
            redirectHandler={handlePushToLoginPage}
        />
        </>
    );
};

export default RegisterPageFooter;