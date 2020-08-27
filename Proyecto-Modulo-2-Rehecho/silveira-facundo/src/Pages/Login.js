import React, { Fragment, useState } from 'react';
import NavBar from '../Components/NavBar';
import Form from '../Components/Form';
import userJSON from '../data-base/userData.json';



const Login = () => {

    const Users = userJSON;

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };





    return(
        <Fragment>
            <NavBar justify="center"/>
            <Form onClick={handleInputValue}/>
        </Fragment>
    )
}

export default Login;