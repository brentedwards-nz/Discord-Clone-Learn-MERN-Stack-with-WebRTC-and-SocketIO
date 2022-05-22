import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant="h5" sc={{color:"white"}}>
                Welcome back!
            </Typography>
            <Typography sx={{color: "#b9bbbe"}}>
                We are happy you are with us! 
            </Typography>
        </>
    )
}

export default LoginPageHeader;