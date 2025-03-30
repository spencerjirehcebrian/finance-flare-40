
import React, { useState } from 'react';
import { X, Camera, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageData: string) => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ isOpen, onClose, onCapture }) => {
  const { toast } = useToast();
  const [isCameraActive, setIsCameraActive] = useState(false);
  
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
      title: "Picture taken",
      description: "Receipt captured successfully.",
    });
    onCapture("receipt-image-placeholder.jpg");
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <h2 className="text-xl font-bold mb-4">Capture Receipt</h2>
        
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
      </div>
    </div>
  );
};

export default CameraModal;
