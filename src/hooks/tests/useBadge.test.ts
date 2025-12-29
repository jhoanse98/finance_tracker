import { renderHook, act, waitFor } from '@testing-library/react';
import useBadge from '../useBadge';
import {
  getExpensesByUserId,
  createExpenseApi,
  updateExpenseApi,
} from '../../api/expenses.api';

const mockedGetExpenses = getExpensesByUserId as jest.Mock;
const mockedCreateExpense = createExpenseApi as jest.Mock;
const mockedUpdateExpense = updateExpenseApi as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
});

test('initial state is correct', () => {
  const { result } = renderHook(() =>
    useBadge({ userId: undefined, budgetUser: undefined })
  );

  expect(result.current.budget).toBe(0);
  expect(result.current.expensesList).toEqual([]);
  expect(result.current.expenses).toBe(0);
  expect(result.current.selectedExpense).toBeNull();
});

test('fetches expenses when userId is provided', async () => {
  mockedGetExpenses.mockResolvedValueOnce([
    { id: 1, amount: 100, category: 'food', date: '2024-01-01' },
    { id: 2, amount: 200, category: 'others', date: '2024-01-02' },
  ]);

  const { result } = renderHook(() =>
    useBadge({ userId: "1", budgetUser: 1000 })
  );

  await waitFor(() => {
    expect(result.current.expensesList.length).toBe(2);
  });

  expect(result.current.expenses).toBe(300);
  expect(mockedGetExpenses).toHaveBeenCalledWith("1");
});

test('sets selected expense correctly', () => {
  const { result } = renderHook(() =>
    useBadge({ userId: "1", budgetUser: 1000 })
  );

  const expense = {
    id: "1",
    title: 'test',
    amount: 100,
    category: 'food',
    type: 'fixed',
    date: '2024-01-01',
  };

  act(() => {
    result.current.handleSelectedExpense(expense);
  });

  expect(result.current.selectedExpense).toEqual(expense);
});
test('creates a new expense and updates the list', async () => {
  const newExpense = {
    amount: 50,
    title: 'create test',
    category: 'transport',
    type: 'fixed',
    date: '2024-01-03',
    userId: '1',
  };

  mockedCreateExpense.mockResolvedValueOnce(newExpense);

  const { result } = renderHook(() =>
    useBadge({ userId: "1", budgetUser: 1000 })
  );

  await act(async () => {
    await result.current.createExpense(newExpense);
  });

  expect(mockedCreateExpense).toHaveBeenCalledWith(newExpense);
  expect(result.current.expensesList).toContainEqual(newExpense);
});

test('updates an expense by id', async () => {
  mockedGetExpenses.mockResolvedValueOnce([
    { id: "1", amount: 100, category: 'food', date: '2024-01-01' },
  ]);

  const { result } = renderHook(() =>
    useBadge({ userId: "1", budgetUser: 1000 })
  );
  console.log('alsjdalskd', result)

  await waitFor(() => {
    expect(result.current.expensesList.length).toBe(1);
  });
  expect(result.current.expensesList[0].amount).toBe(100);

  const updatedExpense = {
    id: "1",
    title: 'update Expense',
    type: 'fixed',
    amount: 150,
    category: 'food',
    date: '2024-01-01',
  };

  await act(async () => {
    await result.current.updateExpenseById("1", updatedExpense);
  });

  expect(mockedUpdateExpense).toHaveBeenCalledWith("1", updatedExpense);
  expect(result.current.expensesList[0].amount).toBe(150);
});

test('does not fetch expenses when userId is not provided', () => {
  renderHook(() => useBadge({}));

  expect(mockedGetExpenses).not.toHaveBeenCalled();
});


jest.mock('../../api/expenses.api');