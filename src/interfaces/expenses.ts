export interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
    date: Date;
    type: string;
}

export interface Expenses{
    expenses: Expense[];
}