
import React from 'react';
import { Budget } from '@/types/finance';
import { formatCurrency, calculatePercentage } from '@/utils/formatters';

interface BudgetItemProps {
  budget: Budget;
}

const BudgetItem: React.FC<BudgetItemProps> = ({ budget }) => {
  const { category, allocated, spent, color } = budget;
  const percentage = calculatePercentage(spent, allocated);
  const remaining = allocated - spent;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <p className="font-medium">{category}</p>
        <p className="text-sm">{formatCurrency(remaining)} left</p>
      </div>
      
      <div className="budget-bar mb-1">
        <div 
          className="budget-progress" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color 
          }} 
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <p>{formatCurrency(spent)} spent</p>
        <p>{percentage}% of {formatCurrency(allocated)}</p>
      </div>
    </div>
  );
};

export default BudgetItem;
