
import React from 'react';
import { useFinance } from '@/context/FinanceContext';
import BudgetItem from '@/components/BudgetItem';

const Budget: React.FC = () => {
  const { budgets } = useFinance();

  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Budget</h1>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Monthly Budgets</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4">
          {budgets.map((budget) => (
            <BudgetItem key={budget.id} budget={budget} />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Budget Categories</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-center text-gray-500 py-8">
            Charts and detailed analytics will be available in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
