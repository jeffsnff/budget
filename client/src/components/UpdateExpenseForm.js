import React from 'react'

function UpdateExpenseForm(props){
    const { deleteExpense, handleChange, handleSubmit, inputs: { date, payee, catagory, details, amount }} = props
    return (
        <div>
        <form onSubmit={handleSubmit}>
                <input 
                    type="date" 
                    name="date" 
                    value={date} 
                    onChange={handleChange} 
                    placeholder="Date">
                </input>
                <input 
                    type="text" 
                    name="payee" 
                    value={payee} 
                    onChange={handleChange} 
                    placeholder="Payee">
                </input>
                <input 
                    type="text" 
                    name="catagory" 
                    value={catagory} 
                    onChange={handleChange} 
                    placeholder="Catagory">
                </input>
                <input 
                    type="text" 
                    name="details" 
                    value={details} 
                    onChange={handleChange} 
                    placeholder="Description">
                </input>
                <input 
                    type="text" 
                    name="amount" 
                    value={amount} 
                    onChange={handleChange} 
                    placeholder="Amount">
                </input>
                <button>Submit</button>
                

            </form>
            <button onClick={() => deleteExpense(props.id)}>Delete</button>
        </div>
    )
}

export default UpdateExpenseForm