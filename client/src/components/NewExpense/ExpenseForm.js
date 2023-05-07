import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleOnChangeTitle = ({ target }) => {
    setInputData((prev) => {
      return { ...prev, title: target.value };
    });
  };
  const handleOnChangeAmount = ({ target }) => {
    setInputData((prev) => {
      return { ...prev, amount: target.value };
    });
  };
  const handleOnChangeDate = ({ target }) => {
    setInputData((prev) => {
      return { ...prev, date: target.value };
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputData);
    setInputData({
      title: "",
      amount: "",
      date: "",
    });
    props.formButton();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputData.title}
            onChange={handleOnChangeTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputData.amount}
            onChange={handleOnChangeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-1-1"
            max="2023-12-31"
            value={inputData.date}
            onChange={handleOnChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.formButton}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
