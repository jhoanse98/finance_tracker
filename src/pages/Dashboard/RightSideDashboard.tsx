import React from "react";
import ExpensesList from "./ExpensesList";
import type { Expense } from "../../interfaces/expenses";

interface Props {
  expenses: Expense[];
  setOpenModalExpense: (open: boolean) => void;
  handleSelectedExpense: (expense: Expense) => void;
  updateExpenseById: (
    expenseId: string,
    updatedExpense: Expense
  ) => Promise<void>;
}

const RightSideDashboard = ({
  expenses,
  setOpenModalExpense,
  handleSelectedExpense,
  updateExpenseById,
}: Props) => {
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
        <ExpensesList
          expenses={expenses}
          setOpenModalExpense={setOpenModalExpense}
          handleSelectedExpense={handleSelectedExpense}
          updateExpenseById={updateExpenseById}
        />
      </div>
    </div>
  );
};

export default RightSideDashboard;
