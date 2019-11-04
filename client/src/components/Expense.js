import React, {useState } from 'react'
import UpdateExpense from './UpdateExpense.js'

function Expense(props){
    const [ edit, setEdit ] = useState(false)
    const { date, payee, catagory, details, amount } = props

    const toggle = () => {
        setEdit(prevEdit => (!prevEdit))
    }
    return(
        <div>
            {
                edit ?
                <UpdateExpense 
                    {...props}
                    toggle={toggle}    
                 />
                :
                <div>
                    <span>{date}</span>
                    <span>{payee}</span>
                    <span>{catagory}</span>
                    <span>{details}</span>
                    <span>{amount}</span>
                    <button onClick={toggle}>Update</button>
                </div>
            }
        </div>
        
    )
}

export default Expense