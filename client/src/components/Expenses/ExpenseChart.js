import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const heightData = [
    { label: "Jan", Value: 0 },
    { label: "Feb", Value: 0 },
    { label: "Mar", Value: 0 },
    { label: "Apr", Value: 0 },
    { label: "May", Value: 0 },
    { label: "Jun", Value: 0 },
    { label: "Jul", Value: 0 },
    { label: "Aug", Value: 0 },
    { label: "Sep", Value: 0 },
    { label: "Oct", Value: 0 },
    { label: "Nov", Value: 0 },
    { label: "Dec", Value: 0 },
  ];

  const len = props.expenses_filtered.length;
  for (let i = 0; i < len; i++) {
    const eleObj = props.expenses_filtered[i];
    const monthInIndex = eleObj.date.getMonth();
    heightData[monthInIndex].Value += eleObj.amount;
  }

  return <Chart dataPoints={heightData} />;
};

export default ExpenseChart;
