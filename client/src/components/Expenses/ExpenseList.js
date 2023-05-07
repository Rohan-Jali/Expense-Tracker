import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

  if (props.expenses_filtered.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expense</h2>
  }

  const list = props.expenses_filtered.map((element) => {
    return (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
        key={element.id}
      />
    );
  });

  return <li className="expenses-list">{list}</li>;
};

export default ExpenseList;
