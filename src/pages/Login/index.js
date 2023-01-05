import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import token from "../../utils/token";
import constants from "../../constants";
import {Button, Form} from "react-bootstrap";
import {onChangeText} from "../../utils/eventHandlers";
import {StyledContainer, FormText} from "../../components";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../service/authApi";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onNavigate = useNavigate();
    const {fetchMutation: onLogin, loading}= useFetchMutation(login, ()=>onNavigate(constants.ROUTES.DASHBOARD))

    function validateForm(){
        const emailInDb = "enigma@enigma.com";
        const passwordInDb = "123"
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        onLogin({email, password});
    }

    return (
        <StyledContainer>
            <h1>Login Form</h1>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <FormText
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter your email"}
                    onChange={onChangeText(setEmail)}
                />
                <FormText
                    label={"Password"}
                    type={"password"}
                    placeholder={"Enter your password"}
                    value={password}
                    onChange={onChangeText(setPassword)}
                />
                <Button size={"lg"} type={"submit"} disabled={!validateForm}>
                    Login
                </Button>
            </Form>
        </StyledContainer>
    )
}

export default Login;