import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth.js'
import AccountList from './components/AccountList.js'
import NavBar from './components/NavBar.js'
import {UserContext} from './context/UserProvider.js'
import ExpenseList from './components/ExpenseList.js'
import ProtectedRoutes from './shared/ProtectedRoutes.js'

function App(){
    const { token, logout } = useContext(UserContext)
    return(
        <div>
            { token && <NavBar logout={logout} />}
            <Switch>
                <Route exact path="/" render={rProps => token ? <Redirect to="/accounts"/> : <Auth {...rProps} />} />
                <ProtectedRoutes 
                    path="/accounts"
                    component={AccountList}
                    redirectTo="/"
                />
                <ProtectedRoutes
                    path="/expense"
                    component={ExpenseList}
                    redirectTo="/"
                    />
            </Switch>
        </div>
    )
}
export default App
