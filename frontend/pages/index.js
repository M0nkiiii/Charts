import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Import ArcElement
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  Bar as RechartsBar,
  Line as RechartsLine,
  ResponsiveContainer,
} from "recharts";

// Register the required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Register ArcElement
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartStyle = {
  container: {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  chartWrapper: {
    marginBottom: "40px",
  },
  chartTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#666",
  },
};

const Dashboard = () => {
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [candlestickData, setCandlestickData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/line-chart-data/")
      .then((response) => response.json())
      .then((data) => {
        setLineData({
          labels: data.labels,
          datasets: [
            {
              label: "Line Chart",
              data: data.data,
              borderColor: "rgba(75,192,192,1)",
              fill: false,
            },
          ],
        });
      });

    fetch("http://localhost:8000/api/bar-chart-data/")
      .then((response) => response.json())
      .then((data) => {
        setBarData({
          labels: data.labels,
          datasets: [
            {
              label: "Bar Chart",
              data: data.data,
              backgroundColor: [
                "rgba(255,99,132,0.2)",
                "rgba(54,162,235,0.2)",
                "rgba(255,206,86,0.2)",
              ],
            },
          ],
        });
      });

    fetch("http://localhost:8000/api/pie-chart-data/")
      .then((response) => response.json())
      .then((data) => {
        setPieData({
          labels: data.labels,
          datasets: [
            {
              label: "Pie Chart",
              data: data.data,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        });
      });

    fetch("http://localhost:8000/api/candlestick-data/")
      .then((response) => response.json())
      .then((data) => {
        setCandlestickData(data.data);
      });
  }, []);

  // Convert candlestick data to format suitable for Recharts
  const formatCandlestickData = (data) => {
    if (!data) return [];
    return data.map((d) => ({
      date: d.x,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
    }));
  };

  return (
    <div style={chartStyle.container}>
      <h1 style={chartStyle.heading}>Dashboard</h1>
      <div style={chartStyle.chartWrapper}>
        <div style={chartStyle.chartTitle}>Candlestick Chart</div>
        {candlestickData && (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={formatCandlestickData(candlestickData)}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="date" />
              <YAxis />
              <RechartsTooltip />
              <RechartsLegend />
              <RechartsBar dataKey="open" barSize={100} fill="#413ea0" />
              <RechartsBar dataKey="close" barSize={100} fill="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>
      <div style={chartStyle.chartWrapper}>
        <div style={chartStyle.chartTitle}>Line Chart</div>
        {lineData && <Line data={lineData} />}
      </div>
      <div style={chartStyle.chartWrapper}>
        <div style={chartStyle.chartTitle}>Bar Chart</div>
        {barData && <Bar data={barData} />}
      </div>
      <div style={chartStyle.chartWrapper}>
        <div style={chartStyle.chartTitle}>Pie Chart</div>
        {pieData && <Pie data={pieData} />}
      </div>
    </div>
  );
};

export default Dashboard;
