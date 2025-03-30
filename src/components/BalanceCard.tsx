
import React from 'react';
import { useFinance } from '@/context/FinanceContext';
import { formatCurrency } from '@/utils/formatters';

const BalanceCard: React.FC = () => {
  const { totalBalance, totalIncome, totalExpenses } = useFinance();

  return (
    <div className="card-balance mb-6">
      <h2 className="text-lg font-medium opacity-90 mb-1">Total Balance</h2>
      <p className="text-3xl font-bold mb-4">{formatCurrency(totalBalance)}</p>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="opacity-80">Income</p>
          <p className="text-xl font-medium">{formatCurrency(totalIncome)}</p>
        </div>
        <div>
          <p className="opacity-80">Expenses</p>
          <p className="text-xl font-medium">{formatCurrency(totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
