
import { useEffect, useMemo, useState } from 'react'
import type { Expense, ExpenseUser } from '../interfaces/expenses';
import type { SessionUser } from '../interfaces/user';
import { createExpenseApi, getExpensesByUserId, updateExpenseApi } from '../api/expenses.api';

interface Props{
    userId?: SessionUser['id'];
    budgetUser?: SessionUser['budget']
}

const useBadge = ({ userId, budgetUser }: Props) => {
    
    const [budgetInput, setBudgetInput] = useState<number>(0);
    const [budget, setBudget] = useState<number>(() => {
        if (budgetUser) {
            return budgetUser
        } else {
            return 0
        }
    });
    const [expensesList, setExpensesList] = useState<Expense[]>([]);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [openModalExpense, setOpenModalExpense] = useState<boolean>(false);

    const expenses = useMemo(() => {
        return expensesList.reduce((acc, expense) => {
            return acc + Number(expense.amount)
        }, 0)
    }, [expensesList])

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
    }, [userId, budgetUser]);

    const handleSelectedExpense = (expense: Expense | null) => {
        setSelectedExpense(expense);
    };

    const createExpense = async (newExpense: ExpenseUser) => {
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
        setOpenModalExpense,
        handleSelectedExpense,
        createExpense,
        updateExpenseById
  }
}

export default useBadge
