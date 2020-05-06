import React, { useEffect, useContext } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import NewAccount from './NewAccount.js'


function AccountList() {

    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])


    const mappedAccounts = accounts && accounts.map((account) =>
            <Account
              key={account._id}
              {...account}
            />
    )

    return(
        <MDBContainer>
          <NewAccount />
            <MDBContainer>
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th>Bank Name</th>
                    <th>Account Type</th>
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