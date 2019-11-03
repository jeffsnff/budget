import React, { useState, useContext } from 'react'
import UpdateExpenseForm from './UpdateExpenseForm.js'
import {BankContext} from '../context/BankProvider.js'

function UpdateExpense(props){
    const initState = { date: props.date, payee: props.payee, catagory: props.catagory, details: props.details, amount: props.amount }
    const {updateExpense} = useContext(BankContext)
    const [ thing, setThing ] = useState(initState)

    const handleChange = e => {
        const { name, value } = e.target
        setThing(prevThing => 
            ({...prevThing, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert("Submited")
    }

    return(
        <div>
            <UpdateExpenseForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputs={thing}
             />
        </div>
    )
}

export default UpdateExpense