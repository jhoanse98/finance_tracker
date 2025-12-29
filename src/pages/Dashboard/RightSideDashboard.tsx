import React from "react";
import ExpensesList from "./ExpensesList";
import type { Expense } from "../../interfaces/expenses";

interface Props {
  expenses: Expense[];
}

const RightSideDashboard = ({ expenses }: Props) => {
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
