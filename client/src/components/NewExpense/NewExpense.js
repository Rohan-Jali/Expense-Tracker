import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm , setShowForm]=useState(false)
  const handleSubmit = (userdata) => {
    const amountTypeCast = Number(userdata.amount);
    const dateTypeCast = new Date(userdata.date);
    const modifiedUserData = {
      ...userdata,
      id: String(Math.random()),
      date: dateTypeCast,
      amount: amountTypeCast,
    };
    props.setExpenses((prev) => {
      return [modifiedUserData, ...prev];
    });
  };
  const handleOnClickFormButton = () => {
    setShowForm(true);
  };
  const handleCloseForm=()=>{
    setShowForm(false);
  }
  return (
    <div className="new-expense ">
      {
        showForm && <ExpenseForm onSubmit={handleSubmit} formButton={handleCloseForm} />
      }
      {
        !showForm && <button onClick={handleOnClickFormButton}>Add New Expense</button>
      }
      
    </div>
  );
};

export default NewExpense;
