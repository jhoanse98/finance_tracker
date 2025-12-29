import Modal from "../../components/Modal/Modal";
import ExpensesForm from "../../components/ExpensesForm/ExpensesForm";
import LeftSideDashboard from "./LeftSideDashboard";
import RightSideDashboard from "./RightSideDashboard";
import useBadge from "../../hooks/useBadge";
import { useAuth } from "../../auth/useAuth";
import type { Expense } from "../../interfaces/expenses";

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
  } = useBadge({ userId: user?.id });

  const handleSelectedExpense = (expense: Expense | null) => {
    setSelectedExpense(expense);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(16, 22, 34)",
      }}
    >
      <Modal open={openModalExpense} onClose={() => setOpenModalExpense(false)}>
        <ExpensesForm
          onClose={() => setOpenModalExpense(false)}
          selectedExpense={selectedExpense}
          createExpense={createExpense}
          updateExpenseById={updateExpenseById}
          handleSelectedExpense={handleSelectedExpense}
        />
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          height: "100%",
          padding: "48px",
          boxSizing: "border-box",
        }}
      >
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
