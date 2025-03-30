
import React from 'react';
import { Account } from '@/types/finance';
import { formatCurrency } from '@/utils/formatters';
import { CreditCard, Wallet, PiggyBank, TrendingUp } from 'lucide-react';

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const { name, balance, type, color } = account;
  
  const getIcon = () => {
    switch (type) {
      case 'checking':
        return <Wallet className="w-5 h-5" />;
      case 'savings':
        return <PiggyBank className="w-5 h-5" />;
      case 'credit':
        return <CreditCard className="w-5 h-5" />;
      case 'investment':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Wallet className="w-5 h-5" />;
    }
  };
  
  return (
    <div 
      className="rounded-xl p-4 mb-3 shadow-sm"
      style={{ backgroundColor: `${color}10` }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: color }}
          >
            {getIcon()}
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        </div>
        <p className="font-bold">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
};

export default AccountCard;
