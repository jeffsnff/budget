import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'

function ExpenseList(props){

    const accId = props.location.state.accId
    const { getBankExpense, expenses, getAllAccounts, accounts } = useContext(BankContext)
    const [ newExpense, setNewExpense ] = useState(false)
    let bank = {}

    useEffect(() => {
        getBankExpense(accId)
        getAllAccounts()
    },[])

    const result = accounts ? accounts.filter(account => {
        return account._id === accId
    }) : []
    bank = result[0] ? result[0]: {}

    const mappedExpenses = expenses.map(exp => 
        <Expense  key={exp._id} {...exp} />
    )


    let subtotal = 0
    for(let i=0; i<mappedExpenses.length; i++){
        subtotal = subtotal + mappedExpenses[i].props.amount
    }
    let balance = bank.accountBalance + subtotal
    

    // tried assigning balance to props... but it did not work. this is being passed from AccountList.js to Account.js to ExpenseList.js
    // What I am trying to do is update the database with the new balance.
    props.location.state.balance = balance
    console.log(`This is the first expenselist : ${props.location.state.balance}`)


    return(
      <>
        <>
            <h1>{bank.bankName}</h1>       
            <h2>Total Expenses : ${subtotal.toFixed(2)}</h2>
            <h2>Remaining Balance : ${balance.toFixed(2)}</h2>
            <button onClick={ () => setNewExpense(prevToggle=>!prevToggle)}>
              Add Expense
            </button>
        </>

        {
            newExpense ?
            <NewExpense 
            accid={accId}
            />
            :
            null
        }

        <div>
                <span>Date</span>
                <span>Payee</span>
                <span>Catagory</span>
                <span>Details</span>
                <span>Outflow</span>
                <span>Inflow</span>
        </div>

        {mappedExpenses}
      </>
    )
    
}

export default ExpenseList




