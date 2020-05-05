import React, { useEffect, useContext, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import NewBank from '../bank/NewBank.js'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import ModalPage from '../ModalPage.js'


function AccountList() {
    const [newAccount, setNewAccount] = useState(false)
    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])

    let balance = 0;
    const mappedAccounts = accounts && accounts.map(account => 
      
        
        
            <Account
              
              key={account._id}
              {...account}
              balance={balance}
            />

        
      
    )
    function addNewAccount(){
            setNewAccount(prevNewAccount => !prevNewAccount)
    }
    console.log(`This is on accountlist : ${balance}`)

    return(
        <MDBContainer>
          {!newAccount ?
            // <MDBBtn onClick={addNewAccount}>Add Account</MDBBtn>
            <ModalPage
              
            />
            :
            null
          }
            
              {newAccount ?
                  <div>
                      <h1>New Back Account</h1>
                      <NewBank />
                      <button onClick={() => addNewAccount()}>Cancel</button>
                  </div>
                :
                  null
              }
             <MDBContainer>
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th>Bank Name</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>        
                  {mappedAccounts}
                </MDBTableBody>
              </MDBTable>
            </MDBContainer>
        </MDBContainer>
    )
}

export default AccountList