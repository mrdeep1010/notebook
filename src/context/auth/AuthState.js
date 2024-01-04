import React, { useState } from "react";
import AuthContext from './authContext';

const AuthState = (props) => {
    const userObj = {
        email: "",
        password: "",
        conPassword: "",
        name: ""
    }
    const [login, setLogin] = useState({ email: "", password: "" });
    const [signUp, setsignUp] = useState([]);
    const [user, setUser] = useState(userObj);

    const userSignUp = () => {
        setsignUp(signUp.concat({ ...user, id: signUp.length + 1 }));
        let signUpUser = signUp.find(e => { return (e.email === user.email && e.password === user.password) ? true : false })
        setUser(userObj);
        return signUpUser;
    }

    const userLogin = () => {
        return signUp.find(e => { return (e.email === user.email && e.password === user.password) ? true : false });
    }


    return (
        <AuthContext.Provider value={{ login, setLogin, signUp, setsignUp, user, setUser, userSignUp, userLogin }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;