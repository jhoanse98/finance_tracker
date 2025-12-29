
import { useEffect, useState } from 'react'
import type { Expense } from '../interfaces/expenses';
import type { SessionUser } from '../interfaces/user';
import { createExpenseApi, getExpensesByUserId, updateExpenseApi } from '../api/expenses.api';

interface Props{
    userId?: SessionUser['id'];
}

const useBadge = ({userId}: Props) => {
    const [budgetInput, setBudgetInput] = useState<number>(0);
    const [budget, setBudget] = useState<number>(0);
    const [expensesList, setExpensesList] = useState<Expense[]>([]);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [expenses, setExpenses] = useState<number>(200);
    const [openModalExpense, setOpenModalExpense] = useState<boolean>(false);

    useEffect(() => {
        const getExpensesByUserIdHook = async () => {
            if (userId) {
                const expenses = await getExpensesByUserId(userId)
                if(expenses && Array.isArray(expenses)){
                    setExpensesList(expenses);
                }
            }
        }
        getExpensesByUserIdHook();
    }, [userId]);

    const handleSelectedExpense = (expense: Expense | null) => {
        setSelectedExpense(expense);
    };

    const createExpense = async (newExpense: Omit<Expense, "id">) => {
        const createdExpense = await createExpenseApi(newExpense);
        setExpensesList((prevExpenses) => 
        [...prevExpenses, createdExpense]
        );
    }

    const updateExpenseById = async (expenseId: Expense['id'], updatedExpense: Expense) => {
        await updateExpenseApi(expenseId, updatedExpense);
        setExpensesList((prevExpenses) => 
            prevExpenses.map((expense) => 
                expense.id === expenseId ? updatedExpense : expense
            )
        );
    }

    return {
        budgetInput,
        budget,
        expensesList,
        selectedExpense,
        expenses,
        openModalExpense,
        setSelectedExpense,
        setBudgetInput,
        setBudget,
        setExpenses,
        setOpenModalExpense,
        handleSelectedExpense,
        createExpense,
        updateExpenseById
  }
}

export default useBadge
