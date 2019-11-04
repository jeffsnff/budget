import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../context/UserProvider.js'
import { BankContext } from '../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense'

function ExpenseList(props){


    const accId = props.location.state.accId
    const { getBankExpense, expenses } = useContext(BankContext)
    const [ toggle, setToggle ] = useState(false)
    
    
    useEffect(() => {
        getBankExpense(accId)
    },[])

    
    const mappedExpenses = expenses.map(exp => 
        <Expense  key={exp._id} {...exp} />
    )

    
    return(
        <div>
            {mappedExpenses}
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
        </div>
    )
    
}

export default ExpenseList