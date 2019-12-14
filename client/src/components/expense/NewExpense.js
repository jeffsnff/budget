import React, { useState, useContext } from 'react'
import NewExpenseForm from './NewExpenseForm.js'
import {BankContext} from '../../context/BankProvider.js'

function NewExpense(props){

    const initState = { date: '', payee: '', catagory: '', details: '', amount: '' }
    const { newExpense } = useContext(BankContext)
    const [ expense, setExpense ] = useState(initState)
    const [toggle, setToggle ] = useState(props.toggle)

    const handleChange = e =>{
        const { name, value } = e.target
        setExpense(prevExpense => ({...prevExpense, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        newExpense(expense, props)
        setExpense(initState)
    }
    
    return (
        <div className="newExp">
            <NewExpenseForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputs={expense}
            />
        </div>
    )
}

export default NewExpense