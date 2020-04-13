import React, { useEffect, useContext, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import NewBank from '../bank/NewBank.js'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';


function AccountList() {
    const [toggle, setToggle] = useState(false)
    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])

    let balance = 0;
    const mappedAccounts = accounts && accounts.map(account => 
      
        
        <MDBTableBody>
            <Account
              
              key={account._id}
              {...account}
              balance={balance}
            />
        </MDBTableBody>
        
      
    )
    function newAccount(){
        if(toggle === false){
            setToggle(prevToggle => !prevToggle)
        }
        

    }
    console.log(`This is on accountlist : ${balance}`)

    return(
        <MDBContainer className="col-xl-12">
            <MDBBtn className="addBank" onClick={newAccount}>Add Account</MDBBtn>
              {toggle ?
                  <div>
                      <h1>New Back Account</h1>
                      <NewBank />
                      <button onClick={() => setToggle(prevToggle => !prevToggle)}>Cancel</button>
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
                  {mappedAccounts}
              </MDBTable>
            </MDBContainer>
        </MDBContainer>
    )
}

export default AccountList