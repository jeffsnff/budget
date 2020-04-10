import React, { useEffect, useContext, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import NewBank from '../bank/NewBank.js'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


function AccountList() {
    const [toggle, setToggle] = useState(false)
    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])

    let balance = 0;
    const mappedAccounts = accounts && accounts.map(account => 
        <Account key={account._id}
                 {...account}
                 balance={balance}
                  />
    )
    function newAccount(){
        if(toggle === false){
            setToggle(prevToggle => !prevToggle)
        }
        

    }
    console.log(`This is on accountlist : ${balance}`)

    return(
        <MDBContainer style={{border: "1px solid red"}} className="col-xl-12">
            <button className="addBank" onClick={newAccount}>Add Account</button>
            
                {toggle ?
                    <div>
                        <h1>New Back Account</h1>
                        <NewBank />
                        <button onClick={() => setToggle(prevToggle => !prevToggle)}>Cancel</button>
                    </div>
                    
                    :
                    null
                }
             <div className="mainContainer">   
                <div className="mappedAccounts">
                    {mappedAccounts}
                </div>
                <div>
                    Budget
                </div>
            </div>
        </MDBContainer>
    )
}

export default AccountList