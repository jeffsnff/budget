import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
        <Link to={`/expense/${props._id}`}>{props.bankName}</Link>   
    )
}

export default Account