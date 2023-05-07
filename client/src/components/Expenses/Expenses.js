import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const defaultYear = "2020";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState(defaultYear);

  const expenses_unfiltered = props.expenses;
  const expenses_filtered = expenses_unfiltered.filter((element) => {
    return yearSelected === element.date.getFullYear().toString();
  });
  const handleYearChange = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChange={handleYearChange}
        selectedYear={yearSelected}
      />
      <ExpenseChart expenses_filtered={expenses_filtered} />
      <ExpenseList expenses_filtered={expenses_filtered} />
    </Card>
  );
};

export default Expenses;
