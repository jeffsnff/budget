import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
        <div>
            <Link to={{pathname: `/expense`, state: {accId: props._id}}}><h1>{props.bankName} - ${props.accountBalance}</h1></Link> 
        </div>
          
    )
}

export default Account