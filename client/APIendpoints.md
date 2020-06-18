# User
* post => /auth/signup
* post => /auth/login

# Bank Account
* get => api/budget/user ( get all login users accounts)
* get => api/budget/( bank id ) ( get single bank account information )
* post => api/budget/ (make a new account)
* put => api/budget/( bank id ) (update selected account)

# Expenses
* post => api/expense/bank/( bank id ) (post a single expense to selected bankaccount)
* get => api/expense/bank/( bank id ) (Get all expenses from selected bank account)
* put => api/expense/bank/( expense id ) (update the selected expense)
* delete => api/expense/bank/( expense id ) ( delete the selected expense)