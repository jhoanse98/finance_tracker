import { TextField, Button } from "@mui/material";
import { cx } from "@emotion/css";
import CircularProgressComponent from "../../components/CircularProgressComponent";
import { styles } from "./DashboardStyles";
import InfoText from "../../components/InfoText";
import { useAuth } from "../../auth/useAuth";

interface LeftSideDashboardProps {
  budget: number;
  expenses: number;
  setBudget: (budget: number) => void;
  budgetInput: number;
  setBudgetInput: (input: number) => void;
  setOpenModalExpense: (open: boolean) => void;
}

const LeftSideDashboard = ({
  budget,
  expenses,
  setBudget,
  budgetInput,
  setBudgetInput,
  setOpenModalExpense,
}: LeftSideDashboardProps) => {
  const { user, updateBudget } = useAuth();
  const handleAddBudget = async () => {
    if (budgetInput < expenses) {
      console.log("nooo error");
    } else {
      setBudget(Number(budgetInput));
      if (user) {
        await updateBudget(user?.id, Number(budgetInput));
      }
    }
  };
  return (
    <div className={cx(styles.leftSideContainer)}>
      <CircularProgressComponent budget={budget} expenses={expenses} />
      <div className={cx(styles.leftSideInfo)}>
        <div className={cx(styles.leftSideBudget)}>
          <TextField
            id="standard-basic"
            label="Budget"
            variant="standard"
            type="number"
            fullWidth
            onChange={(e) => setBudgetInput(Number(e.target.value))}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleAddBudget()}
          >
            Set Budget
          </Button>
        </div>
        <div className={cx(styles.leftSideTotalInfo)}>
          <InfoText text="Budget" />
          <InfoText text={budget.toString()} />
        </div>
        <div className={cx(styles.leftSideTotalInfo)}>
          <InfoText text="total:" />
          <InfoText text={(budget - expenses).toString()} />
        </div>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOpenModalExpense(true)}
        >
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default LeftSideDashboard;
