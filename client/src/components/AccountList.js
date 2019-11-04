import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { BankContext } from '../context/BankProvider.js'
import Account from '../components/Account.js'
import NewBank from './NewBank.js'


function AccountList() {
    const [toggle, setToggle] = useState(false)
    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])
    
    const mappedAccounts = accounts && accounts.map(account => 
        <Account key={account._id} {...account} />
    )
    
    return(
        <div>
            
            <button onClick={ () => setToggle(prevToggle => !prevToggle)}>Add Account</button>
            {toggle ?
                <NewBank />
                :
                null
            }
            {mappedAccounts}
        </div>
    )
}

export default AccountList