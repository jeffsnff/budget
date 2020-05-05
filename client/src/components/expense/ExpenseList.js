import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'
import { MDBContainer, MDBTable, MDBTableHead} from 'mdbreact';

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


    return(
      <>
        <>
          <h1>{bank.bankName}</h1>       
          <h2>Remaining Balance : ${subtotal.toFixed(2)}</h2>
          <button onClick={ () => setNewExpense(prevToggle=>!prevToggle)}>
            Add Expense
          </button>
        </>

        {newExpense ?
          <NewExpense 
          accid={accId}
          />
        :
          null
        }

        <MDBContainer>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Date</th>
                <th>Payee</th>
                <th>Catagory</th>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </MDBTableHead>
              {mappedExpenses} 
          </MDBTable>
        </MDBContainer>
      </>
    )
    
}

export default ExpenseList




