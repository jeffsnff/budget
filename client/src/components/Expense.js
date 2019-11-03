import React, {useState } from 'react'
import UpdateExpense from './UpdateExpense.js'

function Expense(props){
    const [ edit, setEdit ] = useState(false)
    const { date, payee, catagory, details, amount } = props


    return(
        <div onClick={ () => setEdit (prevEdit => !prevEdit)}>
            {
                edit ?
                <UpdateExpense {...props} />
                :
                <div>

                <span>{date}</span>
                <span>{payee}</span>
                <span>{catagory}</span>
                <span>{details}</span>
                <span>{amount}</span>
                </div>
            }
        </div>
        
    )
}

export default Expense