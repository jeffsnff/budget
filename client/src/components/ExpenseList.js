import React, { useContext, useEffect } from 'react'
import {UserContext} from '../context/UserProvider.js'
import { BankContext } from '../context/BankProvider.js'
import Expense from './Expense.js'

function ExpenseList(props){
    const accId = props.location.state.accId
    const { getBankExpense, expense } = useContext(BankContext)

    useEffect(() => {
        getBankExpense(accId)
    },[])

    
    const mappedExpense = expense.map(exp => 
        <Expense key={exp._id} {...exp} />
    )
    return(
        <div>
            <div>
                {mappedExpense}
            </div>
            
        </div>
    )
    // to bring in expense from bank account, I need to pull in said bank accounts expenses when it mounts.
    // need the id passed from the account page
    
}

export default ExpenseList