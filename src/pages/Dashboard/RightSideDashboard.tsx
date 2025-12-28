import React from "react";
import expenses from "../../db/expenses.json";
import ExpensesList from "./ExpensesList";

const RightSideDashboard = () => {
  return (
    <div
      style={{
        flex: "1 0 0 ",
        background: "white",
        display: "flex",
        justifyContent: "center",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2>expenses</h2>
        <ExpensesList expenses={expenses} />
      </div>
    </div>
  );
};

export default RightSideDashboard;
