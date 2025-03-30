
import React, { useState } from 'react';
import { X, Camera, Check, Receipt, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageData: string) => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ isOpen, onClose, onCapture }) => {
  const { toast } = useToast();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [transactionType, setTransactionType] = useState<'expense' | 'income'>('expense');
  
  const handleStartCamera = () => {
    // In a real app, this would initialize the camera
    setIsCameraActive(true);
    toast({
      title: "Camera initialized",
      description: "In a real mobile app, the camera would be active now.",
    });
  };
  
  const handleTakePicture = () => {
    // Simulate taking a picture
    toast({
      title: "Image captured",
      description: `Smart scan completed for ${transactionType}.`,
    });
    onCapture("transaction-image-placeholder.jpg");
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-bold">Smart Transaction Scan</h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex rounded-lg overflow-hidden mb-4">
          <button
            type="button"
            className={`flex-1 py-2 text-center flex items-center justify-center ${transactionType === 'expense' ? 'bg-finance-expense text-white' : 'bg-gray-200'}`}
            onClick={() => setTransactionType('expense')}
          >
            <ArrowUpCircle className="w-4 h-4 mr-1" /> Expense
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center flex items-center justify-center ${transactionType === 'income' ? 'bg-finance-income text-white' : 'bg-gray-200'}`}
            onClick={() => setTransactionType('income')}
          >
            <ArrowDownCircle className="w-4 h-4 mr-1" /> Income
          </button>
        </div>
        
        <div className="bg-gray-100 rounded-lg aspect-[4/3] mb-4 flex items-center justify-center">
          {isCameraActive ? (
            <div className="text-center">
              <p>Camera Preview</p>
              <p className="text-xs text-gray-500">(Simulated)</p>
            </div>
          ) : (
            <Camera className="w-16 h-16 text-gray-400" />
          )}
        </div>
        
        <div className="flex justify-center space-x-4">
          {!isCameraActive ? (
            <button
              onClick={handleStartCamera}
              className="px-4 py-2 bg-finance-primary text-white rounded-lg flex items-center"
            >
              <Camera className="w-4 h-4 mr-2" />
              Start Camera
            </button>
          ) : (
            <button
              onClick={handleTakePicture}
              className="w-14 h-14 bg-finance-primary text-white rounded-full flex items-center justify-center"
            >
              <Check className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
          <p className="font-medium text-gray-700">Smart Scan will:</p>
          <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
            <li>Capture {transactionType === 'expense' ? 'receipts & bills' : 'invoices & payments'}</li>
            <li>Extract amount, date and merchant automatically</li>
            <li>Suggest a category based on the transaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
