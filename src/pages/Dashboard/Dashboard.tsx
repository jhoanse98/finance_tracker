import { useState } from "react";
import CircularProgressComponent from "../../components/CircularProgressComponent";
import { Button, TextField } from "@mui/material";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const [budgetInput, setBudgetInput] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(200);
  const [openModalExpense, setOpenModalExpense] = useState<boolean>(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(16, 22, 34)",
      }}
    >
      <Modal open={openModalExpense}>
        <div>este es el modal ejemplo</div>
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
        <div
          style={{
            flex: "1 0 0 ",
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 24,
            gap: 32,
            boxSizing: "border-box",
          }}
        >
          <CircularProgressComponent budget={budget} expenses={expenses} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: 450,
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: 16,
                justifyContent: "space-between",
              }}
            >
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
                onClick={() => {
                  setBudget(Number(budgetInput));
                  setBudgetInput(0);
                }}
              >
                Set Budget
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: 24,
                  lineHeight: "12px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Budget:
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: 24,
                  lineHeight: "12px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {budget}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: 24,
                  lineHeight: "12px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Total:
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: 24,
                  lineHeight: "12px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {budget - expenses}
              </p>
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
          dashboard
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
