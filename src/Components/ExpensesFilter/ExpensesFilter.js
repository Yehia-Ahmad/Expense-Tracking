import React from "react";

import "./Style/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleChange = (e) => {
    // console.log(+e.target.value);
    const filteredExpense = props.items.filter(
      (item) => item.date.getFullYear() === +e.target.value
    );
    // console.log(filteredExpense);
    props.onAddExpenseFilter(filteredExpense);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
