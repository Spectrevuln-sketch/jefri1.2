import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const CollectionContext = createContext();

function CollectionContextProvider(props) {
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
        <CollectionContext.Provider value={{ islogin, AuthLogin }}>
            {props.children}
        </CollectionContext.Provider>
    );
}

export default CollectionContext;
export { CollectionContextProvider };