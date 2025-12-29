import {
  Apple,
  CasinoSharp,
  DirectionsBus,
  LocalDining,
  Tv,
} from "@mui/icons-material";
import type { Expense } from "../../interfaces/expenses";
import { Button } from "@mui/material";
import { styles } from "./DashboardStyles";
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

const ExpensesList = ({
  expenses,
  setOpenModalExpense,
  handleSelectedExpense,
}: Props) => {
  const IconsCategory = {
    food: <Apple sx={{ color: "red", fontSize: 48 }} />,
    transportation: <DirectionsBus sx={{ color: "blue", fontSize: 48 }} />,
    entertainment: <Tv sx={{ color: "green", fontSize: 48 }} />,
    utilities: <LocalDining sx={{ color: "orange", fontSize: 48 }} />,
    others: <CasinoSharp sx={{ color: "purple", fontSize: 48 }} />,
  };
  const getIconByCategory = (category: string) => {
    return IconsCategory[category as keyof typeof IconsCategory];
  };

  return (
    <div className={cx(styles.expensesContainer)}>
      {expenses.map((expense) => (
        <div key={expense.id} className={cx(styles.expenseInfo)}>
          <div className={cx(styles.expenseStructure)}>
            <div className={cx(styles.expenseImage)}>
              {getIconByCategory(expense?.category)}
            </div>
            <div className={cx(styles.expenseText)}>
              <p
                style={{
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {expense?.title}
              </p>
              <p
                style={{
                  margin: 0,
                }}
              >{`${expense?.category} - ${expense?.type}`}</p>
              <p
                style={{
                  margin: 0,
                }}
              >
                {new Date(expense?.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              handleSelectedExpense(expense);
              setOpenModalExpense(true);
            }}
          >
            Editar
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
