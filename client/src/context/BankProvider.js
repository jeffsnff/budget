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
        expenses: []
    }
    const [ bankState, setBankState ] = useState(initState)

    console.log('da accounts', bankState.accounts)

    const getAllAccounts = () => {
    userAxios.get('/api/budget/user')
        .then(res => {
            console.log('response', res.data)
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
                    expenses: res.data
                }))
            })
            .catch(err => console.log(err))
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
    const updateBankAcct = () => {
        
    }
    const deleteBankAcct = () => {

    }

    const newExpense = (expense, props) => {
        userAxios.post(`/api/expense/bank/${props.accid}`, expense)
            .then(res => {
                setBankState(prevBankState => ({
                    ...prevBankState,
                    expenses: [...prevBankState.expenses, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    const updateExpense = (id, updatedExpense) => {
        userAxios.put(`/api/expense/bank/${id}`, updatedExpense)
            .then(res => {
                setBankState(prevBankState => {
                    const expenses = prevBankState.expenses.map(exp => {
                        if (exp._id === id){
                            return res.data
                        }else{
                            return exp
                        }
                    })
                    return { 
                        ...prevBankState,
                        expenses }
                }
            )})
    }

    const deleteExpense = (id) => {
        userAxios.delete(`/api/expense/bank/${id}`)
            .then(() =>  setBankState(prev => {
                const updatedExpenses = prev.expenses.filter(item => item._id !== id)
                return { 
                    ...prev,
                    expenses: updatedExpenses }
            }))
            .catch(err => console.log(err))
    }

    return(
        <BankContext.Provider
            value={{
                accounts: bankState.accounts,
                getAllAccounts: getAllAccounts,

                expenses: bankState.expenses,
                getBankExpense: getBankExpense,

                newBankAcct: newBankAcct,
                updateBankAcct: updateBankAcct,

                newExpense: newExpense,
                updateExpense: updateExpense,
                deleteExpense: deleteExpense
            }}
        >
            {props.children}
        </BankContext.Provider>
    )
}
export default BankProvider