import type { Expense } from "../interfaces/expenses";

const API_URL = import.meta.env.VITE_API_URL;

export const getExpensesByUserId = async (userId: string) => {
  const res = await fetch(
    `${API_URL}/expenses?userId=${userId}`
  );
  return res.json();
};

export const createExpenseApi = async (expense: Omit<Expense, "id">) => {
  const res = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  return res.json();
};

export const updateExpenseApi = async (id: string, expense: Expense) => {
  const res = await fetch(`${API_URL}/expenses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  return res.json();
};
