import React, { useState, useContext } from 'react'
import NewBankForm from './NewBankForm.js'
import { BankContext } from '../context/BankProvider.js'
import { UserContext } from '../context/UserProvider.js'

function NewBank(){
    const initState = { bankName: '', accountType: '', accountBalance: 0 }
    const [ newBank, setNewBank ] = useState(initState)

    const handleChange = e => {
        const { name, value } = e.target
        setNewBank(prevNewBank => ({...prevNewBank, [name]: value}))
    }
    const handleSubmit = e => {
        e.preventDefault()
        

    }

    return (
        <NewBankForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={newBank}
        />
    )
}

export default NewBank