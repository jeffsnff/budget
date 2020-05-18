import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';

function ExpenseList(props){

    const accId = props.location.state.accId
    const { getBankExpense, expenses, getAllAccounts, accounts } = useContext(BankContext)
    let currentBank = {}

    useEffect(() => {
        getBankExpense(accId)
        getAllAccounts()
    },[])

    const result = accounts ? accounts.filter(account => {
        return account._id === accId
    }) : []
    currentBank = result[0] ? result[0]: {}

    expenses.sort(function(a,b) {
      let dateA = new Date(a.date), dateB = new Date(b.date)
      return dateA - dateB
    })
    

    const mappedExpenses = expenses.map(exp => 
        <Expense  key={exp._id} {...exp} />
    )


    let subtotal = 0
    for(let i=0; i<mappedExpenses.length; i++){
        subtotal = subtotal + mappedExpenses[i].props.amount
    }


    return(
        <>
          <h1>{currentBank.bankName}</h1>       
          <h2>Remaining Balance : ${subtotal.toFixed(2)}</h2>

          <MDBContainer>
            <NewExpense 
              accid={accId}
            />
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th>Date</th>
                  <th>Payee</th>
                  <th>Catagory</th>
                  <th>Details</th>
                  <th>Amount</th>
                  <th>Cleared</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {mappedExpenses}
              </MDBTableBody>
                 
            </MDBTable>
          </MDBContainer>
      </>
    )
    
}

export default ExpenseList
