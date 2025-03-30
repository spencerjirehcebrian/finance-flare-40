
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
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        <TransactionForm onClose={onClose} />
      </div>
    </div>
  );
};

export default TransactionModal;
