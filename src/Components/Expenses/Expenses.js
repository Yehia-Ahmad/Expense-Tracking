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
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
      </Card>
      </div>
  );
}

export default Expenses;
