
import React from 'react';
import { useFinance } from '@/context/FinanceContext';
import BalanceCard from '@/components/BalanceCard';
import TransactionItem from '@/components/TransactionItem';
import { useToast } from '@/hooks/use-toast';

const Home: React.FC = () => {
  const { transactions } = useFinance();
  const { toast } = useToast();
  
  const recentTransactions = transactions.slice(0, 5);

  const handleCaptureReceipt = (imageData: string) => {
    toast({
      title: "Smart Scan Completed",
      description: "Transaction details captured successfully.",
    });
  };
  
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Finance Flare</h1>
      
      <BalanceCard />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {recentTransactions.length > 0 ? (
          recentTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))
        ) : (
          <p className="p-4 text-center text-gray-500">No transactions yet</p>
        )}
      </div>
    </div>
  );
};

export default Home;
