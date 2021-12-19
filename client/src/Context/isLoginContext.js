import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const IsloginContext = createContext();

function IsloginContextProvider(props) {
    const [islogin, setIsLogin] = useState([]);
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    useEffect(() => {
        AuthLogin()
    }, []);
    const AuthLogin = async () => {
        await api.get('/islogin')
            .then(res => {
                setIsLogin(res.data)
            }).catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    return (
        <IsloginContext.Provider value={{ islogin, AuthLogin }}>
            {props.children}
        </IsloginContext.Provider>
    );
}

export default IsloginContext;
export { IsloginContextProvider };