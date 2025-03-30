
import React from 'react';
import { Transaction } from '@/types/finance';
import { formatCurrency, formatShortDate } from '@/utils/formatters';
import { ArrowUpRight, ArrowDownRight, Receipt } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
  onPress?: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onPress }) => {
  const { type, amount, description, category, date, receiptImage } = transaction;
  
  const isExpense = type === 'expense';
  const isIncome = type === 'income';
  
  return (
    <div 
      className="transaction-item" 
      onClick={onPress}
    >
      <div className="flex items-center">
        <div className={`icon-container ${isExpense ? 'bg-finance-expense/10' : 'bg-finance-income/10'} mr-3`}>
          {isExpense ? (
            <ArrowDownRight className="w-5 h-5 text-finance-expense" />
          ) : (
            <ArrowUpRight className="w-5 h-5 text-finance-income" />
          )}
        </div>
        
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-sm text-gray-500">{category} • {formatShortDate(date)}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <p className={isExpense ? 'expense-amount' : 'income-amount'}>
          {isExpense ? '-' : '+'}{formatCurrency(amount)}
        </p>
        {receiptImage && (
          <Receipt className="w-4 h-4 ml-2 text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default TransactionItem;
