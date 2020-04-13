import React from 'react'
import { Link } from 'react-router-dom'

function Account(props){
    return(
      <tr>
        <Link to={{pathname: `/expense`, state: {accId: props._id, balance: props.balance}}}>
          <td>{props.bankName} </td>
        </Link>
        <td>{props.accountType}</td>
        <td>{props.balance}</td>
      </tr>   
    )
}

export default Account