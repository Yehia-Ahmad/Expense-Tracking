import React , { useState } from 'react';
// import ExpenseItem from '../Expenses/ExpenseItem';
import './Style/ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    // const [userInput , setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        // console.log(enteredTitle);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((pervState)=>{
        //     console.log(pervState);
        //     return {...pervState , enteredTitle : event.target.value};
        // })
    }

    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        // console.log(enteredAmount);
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput ,
        //     enteredAmount:event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        console.log(enteredDate);
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
    }

    const submitForm = (event) => {
        event.preventDefault();
        const expenseItem = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseItem);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate ('');
        // return <ExpenseItem title = {enteredTitle} date = {enteredDate} amount = {enteredAmount} />
    }

    return <form onSubmit={submitForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min= "2019-1-1" max= "2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' onChange={submitForm}>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm ;