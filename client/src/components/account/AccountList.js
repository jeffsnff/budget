import React, { useEffect, useContext } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import NewBank from '../bank/NewBank.js'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import ModalPage from '../ModalPage.js'


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
          <ModalPage/>
          <NewBank />
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