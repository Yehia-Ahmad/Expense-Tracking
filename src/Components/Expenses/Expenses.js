import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Style/Expenses.css";

const Expenses = (props) => {
  const [fillteredYear, setFillteredYear] = useState(props.items);

  const addExpenseFilterHandler = (selectedYear) => {
    // console.log(selectedYear);
    // console.log(fillteredYear);
    setFillteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          items={props.items}
          onAddExpenseFilter={addExpenseFilterHandler}
        />

        <ExpenseChart expenses={fillteredYear} />

        <ExpensesList items={fillteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
