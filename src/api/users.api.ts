import type { SessionUser } from "../interfaces/user";

const API_URL = "http://localhost:3001";

export const getUser = async (email: string, password: string) => {
      const res = await fetch(`${API_URL}/users?email=${email}&password=${password}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}


export const updateUserBudgetApi = async (userId: SessionUser['id'], budget: number) => {
  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({budget}),
  });

  return res.json();
};
