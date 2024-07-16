import React, { useState, useEffect } from "react";
import axios from "axios";
import {Bar, Line} from "react-chartjs-2";
import Chart from "chart.js/auto";
import { baseURL } from "../baseurl";

Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.legend.position = "bottom";

const BarChart = () => {
  const [dataKeys, setDataKeys] = useState([])
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: "coral",
        },
      ],
    });
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`${baseURL}/api/data`);
        console.log(result.data);
        setData(result.data);
      };
      fetchData();
    }, []);

  useEffect(() => {
    function extractKeys(array) {
      let keys = [];
      array.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (!keys.includes(key)) {
            keys.push(key);
          }
        });
      });
      return keys;
    }
    let keys = extractKeys(data);
    setDataKeys(keys);
  }, [data]);

  useEffect(() => {
    setChartData({
      labels: data.map((item) => item[selectedValue]),
      datasets: [
        {
          label: selectedValue,
          data: data.map((item) => item[selectedValue2]),
          backgroundColor: [
            "Coral",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
            "Indigo",
            "violet",
            "red",
            "Brown",
            "Pink"
          ],
        },
      ],
    });
  }, [selectedValue,selectedValue2, data]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

   const handleChange2 = (event) => {
     setSelectedValue2(event.target.value);
   };

  // console.log(selectedValue);
  return (
    <div>
      <h1>Bar Chart</h1>
      <select value={selectedValue} onChange={handleChange}>
        {dataKeys.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select value={selectedValue2} onChange={handleChange2}>
        {dataKeys.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <Bar data={chartData} height={400} width={600} />
    </div>
  );
};

export default BarChart;
