import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Style/ExpenseItem.css";

const ExpenseItem = (props)  => {
  return (
    //   <div className="expense-item">
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    // {/* </div> */}
  );
}

export default ExpenseItem;
