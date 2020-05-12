import React, { useState, useContext } from 'react';
import { BankContext } from '../../context/BankProvider.js'


import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';


function NewExpense (props) {

  const initState = { date: '', payee: '', catagory: '', details: '', amount: '', cleared: false }

  const { newExpense } = useContext(BankContext)
  const [ expense, setExpense ] = useState(initState)
  const [ modal, setModal ] = useState(false)

  const handleChange = e =>{
      const { name, value } = e.target

      valuee.target.name ==="checked" ? console.log(`value : ${e.target.value}`) : console.log(`checked : ${e.target.checked}`)




      setExpense(prevExpense => ({...prevExpense, [name]: value}))
      
  }

  const handleSubmit = e => {
      e.preventDefault()
      newExpense(expense, props)
      setExpense(initState)
      toggle()
  }


  const toggle = () => {
    setModal(prevModal => !prevModal)
    setExpense(initState)
    
  }

 

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Add Expense</MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Add New Expnse</MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <MDBInput 
                type="date" 
                name="date" 
                value={expense.date} 
                onChange={handleChange} 
                label="Date">
            </MDBInput>
            <MDBInput 
                type="text" 
                name="payee" 
                value={expense.payee} 
                onChange={handleChange} 
                label="Payee">
            </MDBInput>
            <MDBInput 
                type="text" 
                name="catagory" 
                value={expense.catagory} 
                onChange={handleChange} 
                label="Catagory">
            </MDBInput>
            <MDBInput 
                type="text" 
                name="details" 
                value={expense.details} 
                onChange={handleChange} 
                label="Description">
            </MDBInput>
            <MDBInput 
                type="number" 
                name="amount" 
                value={expense.amount} 
                onChange={handleChange} 
                label="Amount">
            </MDBInput>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" name="check" onChange={handleChange}  class="custom-control-input" id="defaultUnchecked" />
              <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
            </div>
            <button style={{display: "none"}}>Submit</button>
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

export default NewExpense;