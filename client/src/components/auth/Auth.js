import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/UserProvider.js'
import { MDBBtn, Container, Row, MDBCol } from 'mdbreact'


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
        <Container className="something">
            
          <h1 className="display-4 text-center mt-4 font-weight-bold">Back to Basics Budgeting</h1>
          <MDBCol size="12">
            {!toggle ?
              <>
                <AuthForm
                    inputs={inputs}
                    handleChange={handleChange}
                    handleSubmit={handleSignupSubmit}
                    btnText="Sign up"
                />
                <p style={{color: 'red'}}>{authErrMsg}</p>
                <MDBBtn onClick={toggleForms}>Already a Member?</MDBBtn>
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
                <MDBBtn onClick={toggleForms}>Not a Member?</MDBBtn>
              </>
            }
          </MDBCol>
        </Container>
    )
}

export default Auth