import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
    return(
        <nav className="navbar">
            <Link to='/accounts'>Accounts</Link>
            <div>
                <p>Logged In : {props.user.username}</p>
                <button onClick={props.logout}>Logout</button>
            </div>
        </nav>
    )
}


export default NavBar