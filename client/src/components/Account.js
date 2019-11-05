import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
            <div className="account">
                <Link to={{pathname: `/expense`, state: {accId: props._id, balance: props.balance}}}><h1>{props.bankName}</h1>
                <p>{props.accountType}</p></Link>
            </div>
    )
}

export default Account