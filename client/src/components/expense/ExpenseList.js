import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';

function ExpenseList(props){

    const accId = props.location.state.accId
    const { getBankExpense, expenses, getAllAccounts, accounts } = useContext(BankContext)
    let currentBank = {}

    // Updates webpage with new account information after a new expense is added
    useEffect(() => {
        getBankExpense(accId)
        getAllAccounts()
    },[])

    

    // returns the account that the account id matches to for the
    // bank name at the top of webpage
    const result = accounts ? accounts.filter(account => {
        return account._id === accId
    }) : []
    currentBank = result[0] ? result[0]: {}

   

    // Sorts expenses before they go into the mappedExpenses
    expenses.sort(function(a,b) {
      let dateA = new Date(a.date)
      let dateB = new Date(b.date)
      return dateA - dateB
    })
    
    

    // subtotal that is displayed at the top of web page
    
    
    const sortFunction = (expenses) => {
        expenses.sort(function(a,b) {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return dateB - dateA
      })
    }

    // Maps expenses data to a new row and expense
    let mappedExpenses;
    const mapExpenses = (expenses) => {
      mappedExpenses = expenses.map(exp => 
        <Expense  key={exp._id} {...exp} />
      )
    }
    // const mappedExpenses = expenses.map(exp => 
    //     <Expense  key={exp._id} {...exp} />
    // )

    mapExpenses(expenses)
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
                  <th onClick={() => sortFunction(expenses)}>Date</th>
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
