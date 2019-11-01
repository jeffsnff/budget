import React, { useState } from 'react'
import axios from 'axios'

export const BankContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function BankProvider(props){

    const initState = {
        accounts: [],
        expense: []
    }
    const [ bankState, setBankState ] = useState(initState)

    const getAllAccounts = () => {
    userAxios.get('/api/budget/user')
        .then(res => {
            setBankState(prevBankState => ({
                ...prevBankState,
                accounts: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    const getBankExpense = (accId) => {
        userAxios.get(`/api/expense/bank/${accId}`)
            .then(res => {
                setBankState(prevBankState => ({
                    ...prevBankState,
                    expense: res.data
                }))
            })
            .catch(err => console.log(err))
    }
    const clearNewBankAcct = () => {
        // to clear the input forms for new bank and close the form
    }
    
    const newBankAcct = (newBank) => {
        userAxios.post('/api/budget/', newBank)
            .then(res => {
                setBankState(prevBankState => ({
                    ...prevBankState,
                    accounts: [...prevBankState.accounts, res.data]
                }))

            })
            .catch(err => console.log(err))
    }
    return(
        <BankContext.Provider
            value={{
                accounts: bankState.accounts,
                getAllAccounts: getAllAccounts,

                expense: bankState.expense,
                getBankExpense: getBankExpense,

                newBankAcct: newBankAcct
            }}
        >
            {props.children}
        </BankContext.Provider>
    )

}
export default BankProvider