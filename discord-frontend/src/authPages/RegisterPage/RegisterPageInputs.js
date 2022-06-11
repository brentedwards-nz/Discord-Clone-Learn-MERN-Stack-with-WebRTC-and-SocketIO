import InputWithLabel from "../../shared/components/InputWithLabel"
import React from "react";

const   RegisterPageInputs = (props) => {
    const {mail, setMail, username, setUsername, password, setPassword} = props;
    return <>
     <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
     />
     <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
     />
     <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter password"
     />
    </>
}

export default RegisterPageInputs;