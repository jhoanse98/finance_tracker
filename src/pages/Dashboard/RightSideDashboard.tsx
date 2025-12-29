import React from "react";
import ExpensesList from "./ExpensesList";
import { styles } from "./DashboardStyles";
import type { Expense } from "../../interfaces/expenses";
import { cx } from "@emotion/css";

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
    <div className={cx(styles.rightSideContainer)}>
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
