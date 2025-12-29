/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import expensesDB from '../db/expenses.json';
import type { Expense } from '../interfaces/expenses';
import type { SessionUser } from '../interfaces/user';

interface Props{
    userId?: SessionUser['id'];
}

const useBadge = ({userId}: Props) => {
    const [budgetInput, setBudgetInput] = useState<number>(0);
    const [budget, setBudget] = useState<number>(0);
    const [expensesList, setExpensesList] = useState<Expense[]>([]);
    const [expenses, setExpenses] = useState<number>(200);
    const [openModalExpense, setOpenModalExpense] = useState<boolean>(false);

    useEffect(() => {
        if(localStorage.getItem(`expenses`)){
            const storedExpenses = localStorage.getItem(`expenses`);
            console.log(storedExpenses)
        } else {
            const expensesUser = expensesDB.filter(expense => expense.userId === userId);
            if (expensesUser.length) {
                const newExpenses = expensesUser.map(expense => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { userId, ...rest } = expense;
                    console.log('muestra el rest', rest)
                    return { ...rest, date: new Date(expense.date) };
                });
                setExpensesList(newExpenses);
            }
        }
    }, [userId])

    return {
      budgetInput,
      setBudgetInput,
        budget,
      expensesList,
      setBudget,
      expenses,
      setExpenses,
      openModalExpense,
      setOpenModalExpense
  }
}

export default useBadge
