import React , { useState }  from "react";
import "./Style/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

  const [lastItems , setYearItems] = useState(props.items);

  const addExpenseFilterHandler = (filteredExpense) => {
    console.log(filteredExpense);
    console.log(lastItems);
    setYearItems([...filteredExpense]);
  }

  return (
    <div>
    
    <Card className="expenses">
      
      <ExpensesFilter items = {props.items} onAddExpenseFilter = {addExpenseFilterHandler}/>
      
      {lastItems.map((expense) => (
        <ExpenseItem key = {expense.id} title = {expense.title} date = {expense.date} amount = {expense.amount} />
      ))}
      
      </Card>
      </div>
  );
}

export default Expenses;
