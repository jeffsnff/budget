import React, { useState, useContext } from 'react';
import { BankContext } from '../../context/BankProvider.js'


import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';


function NewAccount () {

  const initState = { bankName: '', accountType: ''}
  const { newBankAcct } = useContext(BankContext)
  const [ newBank, setNewBank ] = useState(initState)

  const [ modal, setModal ] = useState(false)


  const toggle = () => {
    setModal(prevModal => !prevModal)
    setNewBank(initState)
    
  }

  const handleChange = e => {
      const { name, value } = e.target
      setNewBank(prevNewBank => ({
        ...prevNewBank, 
        [name]: value
      }))
  }
    const handleSubmit = e => {
        e.preventDefault()
        newBankAcct(newBank)
        setNewBank(initState)
        toggle()
    }

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Add Account</MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>New Bank Account</MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
              <MDBInput
                type="text"
                name="bankName"
                value={newBank.bankName}
                onChange={handleChange}
                label="Bank Name"  
              ></MDBInput>
              <select className="browser-default custom-select"
                type="text"
                name="accountType"
                value={newBank.accountType}
                onChange={handleChange}
                label="Account Type"
              >
                <option value="null">Account Type</option>
                <option value="Checking">Checking</option>
                <option value="Saving">Saving</option>
                <option value="Investment">Investment</option>
                <option value="Credit Card">Credit Card</option>
              </select>
          </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={handleSubmit}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );

}

export default NewAccount;