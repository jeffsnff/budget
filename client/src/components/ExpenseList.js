import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../context/UserProvider.js'
import { BankContext } from '../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense'

function ExpenseList(props){


    const accId = props.location.state.accId
    const { getBankExpense, expense } = useContext(BankContext)
    const [ toggle, setToggle ] = useState(false)
    
    
    useEffect(() => {
        getBankExpense(accId)
    },[])

    
    const mappedExpense = expense.map(exp => 
        <Expense  key={exp._id} {...exp} />
    )

    
    return(
        <div>
            {mappedExpense}
            <button onClick={ () => setToggle(prevToggle=>!prevToggle)}>Add Expense</button>
            {
                toggle ?
                <NewExpense accid={accId}/>
                :
                null
            }
        </div>
    )
    
}

export default ExpenseList