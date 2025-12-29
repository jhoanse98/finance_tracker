export interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
    date: string;
    type: string;
}

export interface Expenses{
    expenses: Expense[];
}