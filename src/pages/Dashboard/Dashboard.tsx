import Modal from "../../components/Modal/Modal";
import ExpensesForm from "../../components/ExpensesForm/ExpensesForm";
import LeftSideDashboard from "./LeftSideDashboard";
import RightSideDashboard from "./RightSideDashboard";
import useBadge from "../../hooks/useBadge";
import { useAuth } from "../../auth/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const {
    budgetInput,
    expensesList,
    setBudgetInput,
    budget,
    setBudget,
    expenses,
    openModalExpense,
    setOpenModalExpense,
  } = useBadge({ userId: user?.id });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(16, 22, 34)",
      }}
    >
      <Modal open={openModalExpense} onClose={() => setOpenModalExpense(false)}>
        <ExpensesForm onClose={() => setOpenModalExpense(false)} />
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
        <RightSideDashboard expenses={expensesList} />
      </div>
    </div>
  );
};

export default Dashboard;
