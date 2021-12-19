import React, {useContext, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import authContext from './context/authContext'
import {
    Login, Register
} from './pages'

const Routes = () => {
    const [loggedIn] = useContext(authContext)

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {loggedIn === false ? <Redirect to="/login"/> : <Redirect to="/"/>}
                </Route>
                <Route path="/login">
                    {loggedIn === false ? <Login/> : <Redirect to="/"/>}
                </Route>
                <Route path="/register">
                    {loggedIn === false ? <Register/> : <Redirect to="/"/>}
                </Route>
            </Switch>
        </Router>
    )

}
