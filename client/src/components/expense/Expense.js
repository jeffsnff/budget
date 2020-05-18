import React, {useState } from 'react'
import UpdateExpense from './UpdateExpense.js'

function Expense(props){
    const [ edit, setEdit ] = useState(false)
    const { date, payee, catagory, details, amount, cleared } = props

    const toggle = () => {
        setEdit(prevEdit => (!prevEdit))
    }
    const newDate = date.slice(0, 10)
    const [yyyy, mm, dd ] = newDate.split('-')
    const revdate = `${mm}/${dd}/${yyyy}`
    
    return(
        <>
          {
            edit ?
            <UpdateExpense 
                {...props}
                toggle={toggle}    
            />
          : 
            <tr onDoubleClick={toggle}>
                <td>{revdate}</td>
                <td>{payee}</td>
                <td>{catagory}</td>
                <td>{details}</td>
                <td>$ {amount}</td>
                {
                  cleared ?
                  <td><i className="fas fa-check-square" style={{color: "green"}}></i></td>
                  :
                  <td><i className="far fa-square"></i></td>
                }
                
            </tr>
          }
        </>
        
    )
}

export default Expense