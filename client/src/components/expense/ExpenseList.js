import React, { useContext, useEffect, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';

function ExpenseList(props){

  const [ sortedField, setSortedField ] = useState(null)

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
    // expenses.sort((a,b) => {
    //   let dateA = new Date(a.date)
    //   let dateB = new Date(b.date)
    //   return dateA - dateB
    // })


    
    let sortedExpenses = [...expenses]
    
    // starts it off as sorted by date
    if(sortedField === null){
      sortedExpenses.sort((a,b) => {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return dateA - dateB
      })
    }
    // if a column header is clicked, it will sort it based on that header
    if(sortedField !== null){
    sortedExpenses.sort((a,b) => {
      if(a[sortedField] < b[sortedField]){
        return -1
      }
      if(a[sortedField] > b[sortedField]){
        return 1
      }
      return 0
    })
    }








    // Maps expenses data to a new row and expense
    const mappedExpenses = sortedExpenses.map(exp => 
        <Expense  key={exp._id} {...exp} />
    )

    // subtotal that is displayed at the top of web page
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
                  <th onClick={() => setSortedField('date')}>Date</th>
                  <th onClick={() => setSortedField('payee')}>Payee</th>
                  <th onClick={() => setSortedField('catagory')}>Catagory</th>
                  <th onClick={() => setSortedField('details')}>Details</th>
                  <th onClick={() => setSortedField('amount')}>Amount</th>
                  <th onClick={() => setSortedField('cleared')}>Cleared</th>
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
