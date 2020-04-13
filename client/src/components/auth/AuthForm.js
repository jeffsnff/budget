import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
function AuthForm(props){
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    return (
      <MDBContainer className="col-xl-12">
        <MDBRow className="row d-flex justify-content-center">
          <MDBCol className="col-xl-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">{btnText}</h2>
              <div className="grey-text">
                <MDBInput name="username" onChange={handleChange} label="Type your email" icon="envelope" group type="email" validate value={username}error="wrong"
                  success="right" />
                <MDBInput name="password" onChange={handleChange} label="Type your password" icon="lock" group type="password" validate value={password} />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">{btnText}</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
}

export default AuthForm