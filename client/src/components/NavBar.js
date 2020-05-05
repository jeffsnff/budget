import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdbreact'

function NavBar(props){
    return(
        <nav className="navbar">
            <Link to='/accounts'>Accounts</Link>
            <div>
                <p>Logged In : {props.user.username}</p>
                <MDBBtn onClick={props.logout}>Logout</MDBBtn>
            </div>
        </nav>
    )
}


export default NavBar