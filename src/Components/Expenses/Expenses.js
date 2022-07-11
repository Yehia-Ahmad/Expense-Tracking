import React from "react";
import "./Style/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

  const addExpenseFilterHandler = (year) => {
    console.log(year);
    props.onFinalAddExpenseFilter(year);
  }

  return (
    <div>
    
    <Card className="expenses">
      
      <ExpensesFilter onAddExpenseFilter = {addExpenseFilterHandler}/>
      
      {props.items.map((expense , key) => (
        <ExpenseItem key = {key } title = {expense.title} date = {expense.date} amount = {expense.amount} />
      ))}
      
      </Card>
      </div>
  );
}

export default Expenses;
