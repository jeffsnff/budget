import React, { useState, useContext } from 'react'
import UpdateExpenseForm from './UpdateExpenseForm.js'
import {BankContext} from '../../context/BankProvider.js'

function UpdateExpense(props){
    const initState = { date: props.date, payee: props.payee, catagory: props.catagory, details: props.details, amount: props.amount, cleared: props.cleared }
    const {updateExpense, deleteExpense, getBankExpenses} = useContext(BankContext)
    const [ update, setUpdate ] = useState(initState)

    const handleChange = e => {
      const { name, value, checked } = e.target
      setUpdate(prevupdate => 
        ({...prevupdate, [name]: value}))
        
      if(name === "checked"){
        // console.log(checked)
        setUpdate(prevExpense => ({...prevExpense, ['cleared']: checked}))
      }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExpense(props._id, update)
        props.toggle()
    }

    return(
        <div>
            <UpdateExpenseForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                deleteExpense={deleteExpense}
                inputs={update}
                id={props._id}
                toggle={props.toggle}
             />
        </div>
    )
}

export default UpdateExpense