
import React, { useState } from 'react';
import { useFinance } from '@/context/FinanceContext';
import BalanceCard from '@/components/BalanceCard';
import TransactionItem from '@/components/TransactionItem';
import { Camera } from 'lucide-react';
import TransactionModal from '@/components/TransactionModal';
import CameraModal from '@/components/CameraModal';
import { useToast } from '@/hooks/use-toast';

const Home: React.FC = () => {
  const { transactions } = useFinance();
  const { toast } = useToast();
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  
  const recentTransactions = transactions.slice(0, 5);

  const handleCaptureReceipt = (imageData: string) => {
    toast({
      title: "Receipt Captured",
      description: "In a real app, OCR would extract data from the receipt.",
    });
  };
  
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Finance Flare</h1>
      
      <BalanceCard />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <button
          onClick={() => setIsCameraModalOpen(true)}
          className="flex items-center text-finance-primary"
        >
          <Camera className="w-5 h-5 mr-1" />
          <span className="text-sm">Scan Receipt</span>
        </button>
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
      
      <TransactionModal 
        isOpen={isTransactionModalOpen} 
        onClose={() => setIsTransactionModalOpen(false)} 
      />
      
      <CameraModal 
        isOpen={isCameraModalOpen} 
        onClose={() => setIsCameraModalOpen(false)} 
        onCapture={handleCaptureReceipt}
      />
    </div>
  );
};

export default Home;
