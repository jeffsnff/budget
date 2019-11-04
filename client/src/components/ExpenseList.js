import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense'

function ExpenseList(props){

    const accId = props.location.state.accId
    const { getBankExpense, expenses, getAllAccounts, accounts } = useContext(BankContext)
    const [ toggle, setToggle ] = useState(false)
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

  

    // console.log('da bank', accounts)
    return(
        <div>
            <h1>{bank.bankName}</h1>           
            
            <button onClick={ () => setToggle(prevToggle=>!prevToggle)}>Add Expense</button>
            
            {
                toggle ?
                <NewExpense 
                accid={accId}
                toggle={toggle}
                />
                :
                null
            }
            {mappedExpenses}
        </div>
    )
    
}

export default ExpenseList