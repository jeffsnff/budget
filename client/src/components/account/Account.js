import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
            
        <Link to={{pathname: `/expense`, state: {accId: props._id, balance: props.balance}}}>
                <div className="account">
                    <div>{props.bankName} </div>
                    <div>{props.accountType}</div>
                    <div>{props.balance}</div>
                
            </div>
        </Link>
    )
}

export default Account