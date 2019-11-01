import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserProvider.js'

function ProtectedRoutes(props){
    const { token } = useContext(UserContext)
    const { path, redirectTo, component: C } = props
    return(
        token ?
            <Route to={path} render={rProps => <C {...rProps}/>}/>
            :
            <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoutes