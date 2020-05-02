import React from 'react'

function NewBankForm(props){
    
    const { handleChange, handleSubmit, inputs: { bankName, accountBalance, accountType } } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="bankName"
                    value={bankName}
                    onChange={handleChange}
                    placeholder="Bank Name"  
                ></input>
                <select
                    type="text"
                    name="accountType"
                    value={accountType}
                    onChange={handleChange}
                    placeholder="Account Type"
                >
                    <option value="null">Select One</option>
                    <option value="Checking">Checking</option>
                    <option value="Saving">Saving</option>
                    <option value="Investment">Investment</option>
                    <option value="Credit Card">Credit Card</option>
                
                </select>
                <input
                    type="number"
                    name="accountBalance"
                    value={accountBalance}
                    onChange={handleChange}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewBankForm