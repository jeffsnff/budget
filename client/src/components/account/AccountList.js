import React, { useEffect, useContext, useState } from 'react'
import { BankContext } from '../../context/BankProvider.js'
import Account from './Account.js'
import NewBank from '../bank/NewBank.js'


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
        <div>
            <button className="addBank" onClick={newAccount}>Add Account</button>
            
                
                {toggle ?
                    <div className="modal">
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
        </div>
    )
}

export default AccountList