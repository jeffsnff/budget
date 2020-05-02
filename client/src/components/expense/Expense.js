import React, {useState } from 'react'
import UpdateExpense from './UpdateExpense.js'

function Expense(props){
    const [ edit, setEdit ] = useState(false)
    const { date, payee, catagory, details, amount } = props

    const toggle = () => {
        setEdit(prevEdit => (!prevEdit))
    }
    const date1 = new Date(date)
    const day = date1.getDate()
    const month = date1.getMonth() + 1
    const year = date1.getFullYear()

    const newDate = `${month}-${day}-${year}`
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
                        <span>{newDate}</span>
                        <span>{payee}</span>
                        <span>{catagory}</span>
                        <span>{details}</span>
                        <span>${amount}</span>
                        <button onClick={toggle}>Update</button>
                    </div>
            }
        </div>
        
    )
}

export default Expense