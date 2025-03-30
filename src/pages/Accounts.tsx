
import React from 'react';
import { useFinance } from '@/context/FinanceContext';
import AccountCard from '@/components/AccountCard';

const Accounts: React.FC = () => {
  const { accounts } = useFinance();

  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Accounts</h1>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Accounts</h2>
        </div>
        
        <div>
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Account Activity</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-center text-gray-500 py-8">
            Detailed account activity will be available in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
