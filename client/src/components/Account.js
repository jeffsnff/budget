import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
        <div className="accounts">
            <div className="account">
                <Link to={{pathname: `/expense`, state: {accId: props._id}}}><h1>{props.bankName}</h1>
                <p>{props.accountType}</p></Link>
            </div>
        </div>
          
    )
}

export default Account