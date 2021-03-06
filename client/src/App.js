import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/auth/Auth.js'
import AccountList from './components/account/AccountList.js'
import NavBar from './components/NavBar.js'
import {UserContext} from './context/UserProvider.js'
import ExpenseList from './components/expense/ExpenseList.js'
import ProtectedRoutes from './shared/ProtectedRoutes.js'

function App(){
    const { token, logout, user } = useContext(UserContext)
    return(
        <div className="container col-xl-6">
            { token && <NavBar logout={logout} user={user} />}
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
