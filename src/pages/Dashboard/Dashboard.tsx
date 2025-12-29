import Modal from "../../components/Modal/Modal";
import ExpensesForm from "../../components/ExpensesForm/ExpensesForm";
import LeftSideDashboard from "./LeftSideDashboard";
import RightSideDashboard from "./RightSideDashboard";
import useBadge from "../../hooks/useBadge";
import { useAuth } from "../../auth/useAuth";
import type { Expense } from "../../interfaces/expenses";
import { styles } from "./DashboardStyles";
import { cx } from "@emotion/css";

const Dashboard = () => {
  const { user } = useAuth();
  const {
    budgetInput,
    budget,
    selectedExpense,
    expensesList,
    expenses,
    openModalExpense,
    setSelectedExpense,
    setBudgetInput,
    setBudget,
    setOpenModalExpense,
    createExpense,
    updateExpenseById,
  } = useBadge({ userId: user?.id, budgetUser: user?.budget });

  const handleSelectedExpense = (expense: Expense | null) => {
    setSelectedExpense(expense);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "rgba(16, 22, 34)",
      }}
    >
      <Modal
        open={openModalExpense}
        onClose={() => {
          handleSelectedExpense(null);
          setOpenModalExpense(false);
        }}
      >
        <ExpensesForm
          onClose={() => {
            setOpenModalExpense(false);
            handleSelectedExpense(null);
          }}
          selectedExpense={selectedExpense}
          createExpense={createExpense}
          updateExpenseById={updateExpenseById}
        />
      </Modal>
      <div className={cx(styles.dashboardContainer)}>
        <LeftSideDashboard
          budget={budget}
          expenses={expenses}
          setBudget={setBudget}
          budgetInput={budgetInput}
          setBudgetInput={setBudgetInput}
          setOpenModalExpense={setOpenModalExpense}
        />
        <RightSideDashboard
          expenses={expensesList}
          setOpenModalExpense={setOpenModalExpense}
          handleSelectedExpense={handleSelectedExpense}
          updateExpenseById={updateExpenseById}
        />
      </div>
    </div>
  );
};

export default Dashboard;
