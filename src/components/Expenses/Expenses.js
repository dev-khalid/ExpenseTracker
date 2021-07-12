import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./ExpensesChart"; 
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'; 
import "./Expenses.css";

const Expenses = (props) => {
  //catching datas sent from app.js using props
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 
  return (
    <div> 
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/> 
        <ExpensesList items={filteredExpenses} /> 
      </Card>
    </div>
  );
};
export default Expenses;
// we have the array of elements . direct access .
// that's why we don't need to call it again . using props obj
// here setting unique key is the solution .
//it's the same as element_name.insertAdjacentHTML('afterbegin',markup);
