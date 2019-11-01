import React, { useState } from 'react'
import axios from 'axios'


export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || '',
        authErrMsg: ''
    }
    const [ userState, setUserState ] = useState(initState)
    // sends login / signup errors to webpage
    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: errMsg
        }))
    }
    //clears the login / signup erros on webpage 
    const clearAuthErr = () => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: ''
        }))
    }
    // this is the signup function
    const signup = credentials => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    ...res.data
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    // this is the login function
    const login = credentials => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    ...res.data
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    // logout functuon
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: "",
            token: "",
            authErrMsg: ''
        })
    }

    return (
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                
                signup: signup,
                login: login,
                logout: logout,

                authErrMsg: userState.authErrMsg,
                clearAuthErr: clearAuthErr
            
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider