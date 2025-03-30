
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction, Budget, Account } from '@/types/finance';

// Sample data
const sampleTransactions: Transaction[] = [
  {
    id: '1',
    amount: 42.99,
    description: 'Grocery Store',
    category: 'Food',
    date: '2023-06-15',
    type: 'expense',
  },
  {
    id: '2',
    amount: 1200,
    description: 'Salary Deposit',
    category: 'Income',
    date: '2023-06-01',
    type: 'income',
  },
  {
    id: '3',
    amount: 34.50,
    description: 'Gas Station',
    category: 'Transportation',
    date: '2023-06-10',
    type: 'expense',
  },
  {
    id: '4',
    amount: 89.99,
    description: 'Electric Bill',
    category: 'Utilities',
    date: '2023-06-05',
    type: 'expense',
  },
  {
    id: '5',
    amount: 200,
    description: 'Freelance Work',
    category: 'Income',
    date: '2023-06-12',
    type: 'income',
  },
];

const sampleBudgets: Budget[] = [
  {
    id: '1',
    category: 'Food',
    allocated: 400,
    spent: 280,
    period: 'monthly',
    color: '#ef4444',
  },
  {
    id: '2',
    category: 'Transportation',
    allocated: 200,
    spent: 120,
    period: 'monthly',
    color: '#0ea5e9',
  },
  {
    id: '3',
    category: 'Entertainment',
    allocated: 150,
    spent: 50,
    period: 'monthly',
    color: '#a855f7',
  },
  {
    id: '4',
    category: 'Utilities',
    allocated: 300,
    spent: 250,
    period: 'monthly',
    color: '#f97316',
  },
];

const sampleAccounts: Account[] = [
  {
    id: '1',
    name: 'Main Checking',
    balance: 3245.50,
    type: 'checking',
    color: '#0ea5e9',
  },
  {
    id: '2',
    name: 'Savings',
    balance: 12630.42,
    type: 'savings',
    color: '#22c55e',
  },
  {
    id: '3',
    name: 'Credit Card',
    balance: -450.25,
    type: 'credit',
    color: '#ef4444',
  },
];

interface FinanceContextType {
  transactions: Transaction[];
  budgets: Budget[];
  accounts: Account[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions);
  const [budgets, setBudgets] = useState<Budget[]>(sampleBudgets);
  const [accounts, setAccounts] = useState<Account[]>(sampleAccounts);

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        budgets,
        accounts,
        addTransaction,
        deleteTransaction,
        totalBalance,
        totalIncome,
        totalExpenses,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
