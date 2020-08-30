import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    Income: 4000,
    Expense: 2400,
  },
  {
    name: "Feb",
    Income: 3000,
    Expense: 1398,
  },
  {
    name: "Mar",
    Income: 9000,
    Expense: 2200,
  },
  {
    name: "Apr",
    Income: 2780,
    Expense: 3908,
  },
  {
    name: "May",
    Income: 1890,
    Expense: 4800,
  },
  {
    name: "Jun",
    Income: 6390,
    Expense: 3800,
  },
  {
    name: "Jul",
    Income: 3490,
    Expense: 4300,
  },
  {
    name: "Aug",
    Income: 5490,
    Expense: 1300,
  },
  {
    name: "Sep",
    Income: 0,
    Expense: 0,
  },
  {
    name: "Oct",
    Income: 0,
    Expense: 0,
  },
  {
    name: "Nov",
    Income: 0,
    Expense: 0,
  },
  {
    name: "Dec",
    Income: 0,
    Expense: 0,
  },
];

const Spending = () => {
  return (
    <BarChart width={500} height={300} margin={{ top: 50 }} data={data}>
      <CartesianGrid strokeDasharray="10 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Income" fill="#82ca9d" />
      <Bar dataKey="Expense" fill="#F08080" />
    </BarChart>
  );
};

export default Spending;
