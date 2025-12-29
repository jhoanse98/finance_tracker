import type { SessionUser } from "./user";

export interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
    date: string;
    type: string;
}

export type ExpenseUser = Omit<Expense, 'id'> & {userId: SessionUser['id']}

export interface Expenses{
    expenses: Expense[];
}