import { useState } from "react";
import ExpensesList from "./ExpensesList";
import { styles } from "./DashboardStyles";
import type { Expense } from "../../interfaces/expenses";
import { cx } from "@emotion/css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [sortByDate, setSortByDate] = useState<string>("");

  const filteredExpenses = (() => {
    let expensesFiltered = [...expenses];
    if (!(filterCategory === "")) {
      expensesFiltered = expensesFiltered.filter(
        (expense) => expense.category === filterCategory
      );
    }
    if (!(sortByDate === "")) {
      if (sortByDate === "new") {
        expensesFiltered.sort(
          (expenseA, expenseB) =>
            new Date(expenseB.date).getTime() -
            new Date(expenseA.date).getTime()
        );
      }
      if (sortByDate === "old") {
        expensesFiltered.sort(
          (expenseA, expenseB) =>
            new Date(expenseA.date).getTime() -
            new Date(expenseB.date).getTime()
        );
      }
    }
    return expensesFiltered;
  })();

  return (
    <div className={cx(styles.rightSideContainer)}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h2 style={{ flex: "1 0 0", margin: 0 }}>Gastos</h2>
          <div style={{ display: "flex", gap: 8, flex: "1 0 0" }}>
            <FormControl
              fullWidth
              variant="standard"
              className={cx(styles.select)}
            >
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                fullWidth
                labelId="category"
                defaultValue={""}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <MenuItem value="">Sin filtro</MenuItem>
                <MenuItem value="food">Comida</MenuItem>
                <MenuItem value="transportation">Transporte</MenuItem>
                <MenuItem value="entertainment">Entretenimiento</MenuItem>
                <MenuItem value="utilities">útiles</MenuItem>
                <MenuItem value="others">Otros</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              className={cx(styles.select)}
            >
              <InputLabel id="time">Filtrar por tiempo</InputLabel>
              <Select
                fullWidth
                defaultValue={""}
                labelId="time"
                onChange={(e) => setSortByDate(e.target.value)}
              >
                <MenuItem value="">Sin filtro</MenuItem>
                <MenuItem value="new">Más recientes</MenuItem>
                <MenuItem value="old">Más antiguos</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <ExpensesList
          expenses={filteredExpenses}
          setOpenModalExpense={setOpenModalExpense}
          handleSelectedExpense={handleSelectedExpense}
          updateExpenseById={updateExpenseById}
        />
      </div>
    </div>
  );
};

export default RightSideDashboard;
