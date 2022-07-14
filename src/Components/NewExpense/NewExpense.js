import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./Style/NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const isDisplayForm = () => {
    setDisplayForm(true);
  };

  const notIsDisplayForm = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {displayForm && (
        <ExpenseForm
          onClose={notIsDisplayForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!displayForm && (
        <button type="submit" onClick={isDisplayForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
