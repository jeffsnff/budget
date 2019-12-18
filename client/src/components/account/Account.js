import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
            <div className="account">
                <Link to={{pathname: `/expense`, state: {accId: props._id, balance: props.balance}}}>
                    <span>{props.bankName}</span>
                    <span>{props.accountType}</span>
                    <span>{props.balance}</span>
                </Link>
            </div>
    )
}

export default Account