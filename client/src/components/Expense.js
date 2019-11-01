import React from 'react'

function Expense(props){

    const { date, payee, catagory, details, amount } = props
    return(
        <div>
            <span>{date}</span>
            <span>{payee}</span>
            <span>{catagory}</span>
            <span>{details}</span>
            <span>{amount}</span>
        </div>
        
    )
}

export default Expense