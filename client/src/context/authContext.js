import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const authContext = createContext()

const authContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(null)
    var axiosInstance = axios.create({
        baseUrl: process.env.REACT_AP_API_URL,
        withCredentials: true
    })

    useEffect(() => {
        getLoggedIn()
    }, [])

    const getLoggedIn = async () => {
        const loggedInRes = await axiosInstance.get('/isLogin')
        setLoggedIn(loggedInRes.data)
    }

    return (
        <authContext.Provider calue = {{loggedIn, getLoggedIn}}>
            {props.children}
        </authContext.Provider>
    )

}

export default authContext
export {authContextProvider}
