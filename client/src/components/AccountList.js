import React, { useEffect, useContext, useState } from 'react'
import { BankContext } from '../context/BankProvider.js'
import Account from '../components/Account.js'
import NewBank from './NewBank.js'


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

    console.log(`This is on accountlist : ${balance}`)

    return(
        <div>
            <button className="addBank" onClick={ () => setToggle(prevToggle => !prevToggle)}>Add Account</button>
            
                
                {toggle ?
                    <NewBank />
                    :
                    null
                }
             <div className="mainContainer">   
                <div className="mappedAccounts">
                    {mappedAccounts}
                </div>
            </div>
        </div>
    )
}

export default AccountList