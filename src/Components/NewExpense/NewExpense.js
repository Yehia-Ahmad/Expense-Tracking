import React from 'react';
import ExpenseForm from './ExpenseForm';
import './Style/NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = expenseData => {
        expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
}

export default NewExpense