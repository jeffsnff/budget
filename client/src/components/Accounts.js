import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { BankContext } from '../context/BankProvider.js'
import Account from '../components/Account.js'
import NewBank from './NewBank.js'


function Accounts() {
    const [toggle, setToggle] = useState(false)
    const { getAllAccounts, accounts } = useContext(BankContext)

    useEffect(() => {
        getAllAccounts()
    },[])
    
    const mappedAccounts = accounts.map(account => 
        <Account key={account._id} {...account} />
    )
    
    return(
        <div>
            {mappedAccounts}
            <button onClick={ () => setToggle(prevToggle => !prevToggle)}>Add Account</button>
            {toggle ?
                <NewBank />
                :
                null
            }
        </div>
    )
}

export default Accounts