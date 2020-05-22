import React, { useContext, useEffect, useState, useMemo } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Expense from './Expense.js'
import NewExpense from './NewExpense.js'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';
import './expStyles.css'


// custom hook function
const useSortableData = (items, config = null) => {
  const [ sortConfig, setSortConfig ] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items] // This may need to be moved out of useMemo
    // starts it off as sorted by date
    if(sortConfig === null){
      sortableItems.sort((a,b) => {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return dateA - dateB
      })
    }

    // if a column header is clicked, it will sort it based on that header
    if(sortConfig !== null){
      sortableItems.sort((a,b) => {
        if(a[sortConfig.key] < b[sortConfig.key]){
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if(a[sortConfig.key] > b[sortConfig.key]){
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [ items, sortConfig])

  // Gets the direction of the sort for className
  const requestSort = key => {
    let direction = 'ascending'
    if(sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending'){
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }
  
  return { items: sortedItems, requestSort, sortConfig }
}





function ExpenseList(props){
 
  const accId = props.location.state.accId
  const { getBankExpense, expenses, getAllAccounts, accounts } = useContext(BankContext)
  const { items, requestSort, sortConfig } = useSortableData(expenses)
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

  // Gets the direction for className for sorting image
  const getClassNamesFor = (name) => {
    if(!sortConfig){
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  // Mapps over the expenses in array to a single expense row
  const mappedExpenses = items.map(exp => 
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
                <th onClick={() => requestSort('date')} className={getClassNamesFor('date')}>Date</th>
                <th onClick={() => requestSort('payee')} className={getClassNamesFor('payee')}>Payee</th>
                <th onClick={() => requestSort('catagory')} className={getClassNamesFor('catagory')}>Catagory</th>
                <th onClick={() => requestSort('details')} className={getClassNamesFor('details')}>Details</th>
                <th onClick={() => requestSort('amount')} className={getClassNamesFor('amount')}>Amount</th>
                <th onClick={() => requestSort('cleared')} className={getClassNamesFor('cleared')}>Cleared</th>
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
