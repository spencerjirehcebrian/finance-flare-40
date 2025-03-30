
import React, { useState } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { TransactionType } from '@/types/finance';
import { Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TransactionFormProps {
  onClose: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onClose }) => {
  const { addTransaction } = useFinance();
  const { toast } = useToast();
  
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<TransactionType>('expense');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !description || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }
    
    addTransaction({
      amount: numAmount,
      description,
      category,
      type,
      date,
    });
    
    toast({
      title: "Success",
      description: "Transaction added successfully",
    });
    
    onClose();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      
      <div className="flex rounded-lg overflow-hidden mb-4">
        <button
          type="button"
          className={`flex-1 py-2 text-center ${type === 'expense' ? 'bg-finance-expense text-white' : 'bg-gray-200'}`}
          onClick={() => setType('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={`flex-1 py-2 text-center ${type === 'income' ? 'bg-finance-income text-white' : 'bg-gray-200'}`}
          onClick={() => setType('income')}
        >
          Income
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input
          type="text"
          placeholder="What was this for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          placeholder="e.g. Food, Transportation"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div className="flex space-x-2 pt-4">
        <button
          type="button"
          className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center"
          onClick={onClose}
        >
          <X className="w-4 h-4 mr-1" /> Cancel
        </button>
        <button
          type="submit"
          className="flex-1 py-2 bg-finance-primary text-white rounded-lg flex items-center justify-center"
        >
          <Check className="w-4 h-4 mr-1" /> Save
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
