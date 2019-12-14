import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/UserProvider.js'


function Auth(){
    const initState = { username: '', password: ''}
    const {signup, login, authErrMsg, clearAuthErr } = useContext(UserContext)
    
    // toggle between forms
    const [toggle, setToggle ] = useState(false)
    
    // this is 'state'
    const [ inputs, setInputs ] = useState(initState)
    
    // this is our handleChange
    const handleChange = e => {
        const { name, value } = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }
    // this is our handleSubmit for signup
    const handleSignupSubmit = e => {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }
    // this is our handleSubmit for login
    const handleLoginSubmit = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)

    }

    const toggleForms = () => {
        setToggle(prevToggle => !prevToggle)
        clearAuthErr()
    }
    return(
        <div className="something">
            <div className="signIn">
                <h1>Back to Basics Budgeting</h1>
                {!toggle ?
                    <>
                        <AuthForm
                            inputs={inputs}
                            handleChange={handleChange}
                            handleSubmit={handleSignupSubmit}
                            btnText="Signup"
                        />
                        <p style={{color: 'red'}}>{authErrMsg}</p>
                        <button onClick={toggleForms}>Already a Member?</button>
                    </>
                :
                    <>
                        <AuthForm
                            inputs={inputs}
                            handleChange={handleChange}
                            handleSubmit={handleLoginSubmit}
                            btnText="Login"
                        />
                        <p style={{color: 'red'}}>{authErrMsg}</p>
                        <button onClick={toggleForms}>Not a Member?</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Auth