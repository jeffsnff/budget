import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
    return(
        <nav>
            <Link to='/accounts'>Accounts</Link>
            <button onClick={props.logout}>Logout</button>
        </nav>
    )
}


export default NavBar