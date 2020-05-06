import React, { useState, useContext } from 'react';
import { BankContext } from '../context/BankProvider.js'


import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


function ModalPage () {

  const inputs = { bankName: '', accountType: ''}
  const { newBankAcct } = useContext(BankContext)
  const [ newBank, setNewBank ] = useState(inputs)

  const [ modal, setModal ] = useState(false)


  const toggle = () => {
    setModal(prevModal => !prevModal)
  }

  const handleChange = e => {
      const { name, value } = e.target
      console.log(value)
      setNewBank(prevNewBank => ({
        ...prevNewBank, 
        [name]: value
      }))
  }
    const handleSubmit = e => {
        e.preventDefault()
        newBankAcct(newBank)
        setNewBank(initState)
    }

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Add Account</MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>New Bank Account</MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="bankName"
                  value={inputs.bankName}
                  onChange={handleChange}
                  placeholder="Bank Name"  
              ></input>
              <select
                  type="text"
                  name="accountType"
                  value={inputs.accountType}
                  onChange={handleChange}
                  placeholder="Account Type"
              >
                  <option value="null">Select One</option>
                  <option value="Checking">Checking</option>
                  <option value="Saving">Saving</option>
                  <option value="Investment">Investment</option>
                  <option value="Credit Card">Credit Card</option>
              
              </select>
              <button>Submit</button>
          </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );

}

export default ModalPage;