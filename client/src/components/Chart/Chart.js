import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.Value);
  const maxElement = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.Value}
            maxvalue={maxElement}
            key={dataPoint.label}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
