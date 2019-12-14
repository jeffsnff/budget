import React from 'react'

function AuthForm(props){
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    return (
        <form className="authForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value={username} 
                onChange={handleChange} 
                placeholder="username"/>
                <input 
                type="text" 
                name="password" 
                value={password} 
                onChange={handleChange} 
                placeholder="password"/>

            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm