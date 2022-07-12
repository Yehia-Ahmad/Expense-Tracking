import React from "react";
import ChartBar from "./ChartBar";
import './Style/Chart.css';

const Chart = (props) => {
    return (
        <div className="Chart">
            {props.dataPoint.map( (dataPoint) => (
                <ChartBar key = {dataPoint.label} value = {dataPoint.value}  max-value = {null} label = {dataPoint.label}  />
            ))}
        </div>
    )
}

export default Chart;