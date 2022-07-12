import React , { useState }  from "react";
import "./Style/Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

  const [lastItems , setYearItems] = useState(props.items);

  const addExpenseFilterHandler = (filteredExpense) => {
    // console.log(filteredExpense);
    // console.log(lastItems);
    setYearItems([...filteredExpense]);
  }
  
  return (
    <li>
      <Card className="expenses">
        
        <ExpensesFilter items = {props.items} onAddExpenseFilter = {addExpenseFilterHandler}/>
        
        <ExpensesList items = {lastItems} />
        
      </Card>
    </li>
  );
}

export default Expenses;
