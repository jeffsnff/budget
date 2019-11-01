import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
        <Link to={{pathname: `/expense`, state: {accId: props._id}}}>{props.bankName}</Link>   
    )
}

export default Account