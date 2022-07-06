import React , { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Style/ExpenseItem.css";

const ExpenseItem = (props)  => {

  const [title , setTitel] = useState(props.title);

  console.log("ExpenseItem evaluated by react");
  
  const changeHandler = () => {
    setTitel("updated!");
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
