import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let totalMaximum = 0;
  props.dataPoints.forEach((dataPoint) => {
    totalMaximum = Math.max(totalMaximum, dataPoint.value);
  });
  return (
    <div className="chart">
      {

      props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
