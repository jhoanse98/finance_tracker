import {
  Apple,
  CasinoSharp,
  DirectionsBus,
  LocalDining,
  Tv,
} from "@mui/icons-material";
import React from "react";
import type { Expenses } from "../../interfaces/expenses";

interface Props {
  expenses: Expenses["expenses"];
}

const ExpensesList = ({ expenses }: Props) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxHeight: "350px",
        overflowY: "auto",
      }}
    >
      {expenses.map((expense) => (
        <div
          style={{
            width: "100%",
            padding: "12px 16px",
            background: "rgb(235,235,235)",
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
              }}
            >
              {getIconByCategory(expense?.category)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <div>{expense?.title}</div>
              <div>{`${expense?.category} - ${expense?.type}`}</div>
              <div>{new Date(expense?.date).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
