
import React from 'react';
import { X } from 'lucide-react';
import TransactionForm from './TransactionForm';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <TransactionForm onClose={onClose} />
      </div>
    </div>
  );
};

export default TransactionModal;
