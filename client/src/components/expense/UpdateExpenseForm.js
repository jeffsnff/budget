import React from 'react'
import { MDBInput } from 'mdbreact';
function UpdateExpenseForm(props){
    const { toggle, deleteExpense, handleChange, handleSubmit, inputs: { date, payee, catagory, details, amount, cleared }} = props
    return (
        <>
          <form className="formExp" onSubmit={handleSubmit}>
            <MDBInput 
                type="date" 
                name="date" 
                value={date} 
                onChange={handleChange} 
                placeholder="Date" />
            
            <MDBInput 
                type="text" 
                name="payee" 
                value={payee} 
                onChange={handleChange} 
                placeholder="Payee"/>
            <MDBInput 
                type="text" 
                name="catagory" 
                value={catagory} 
                onChange={handleChange} 
                placeholder="Catagory"/>
            <MDBInput 
                type="text" 
                name="details" 
                value={details} 
                onChange={handleChange} 
                placeholder="Description"/>
            <MDBInput 
                type="text" 
                name="amount" 
                value={amount} 
                onChange={handleChange} 
                placeholder="Amount"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="checked" checked={cleared}  onChange={handleChange}  className="custom-control-input" id="cleared" />
              <label className="custom-control-label" htmlFor="cleared">Cleared</label>
            </div>
            <button>Submit</button>
          </form>
            <button onClick={() => deleteExpense(props.id)}>Delete</button>
            <button onClick={() => toggle()}>Cancel</button>
        </>
    )
}

export default UpdateExpenseForm