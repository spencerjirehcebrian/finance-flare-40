
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import { X, Camera, Check } from 'lucide-react'
import { toast } from 'react-native-hot-toast'
import { tw } from '@/utils/tailwind'

interface CameraModalProps {
  isOpen: boolean
  onClose: () => void
  onCapture: (imageData: string) => void
}

const CameraModal: React.FC<CameraModalProps> = ({ isOpen, onClose, onCapture }) => {
  const [isCameraActive, setIsCameraActive] = useState(false)
  
  const handleStartCamera = () => {
    // In a real app, this would initialize the camera
    setIsCameraActive(true)
    toast.success("Camera initialized")
  }
  
  const handleTakePicture = () => {
    // Simulate taking a picture
    toast.success("Picture taken")
    onCapture("receipt-image-placeholder.jpg")
    onClose()
  }
  
  if (!isOpen) return null
  
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={tw`flex-1 justify-center items-center bg-black/50`}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <View style={tw`bg-white w-[90%] max-w-md rounded-xl p-6 shadow-xl`}>
              <View style={tw`flex-row justify-end mb-2`}>
                <TouchableOpacity onPress={onClose}>
                  <X size={20} color="#6b7280" />
                </TouchableOpacity>
              </View>
              
              <Text style={tw`text-xl font-bold mb-4`}>Capture Receipt</Text>
              
              <View style={tw`bg-gray-100 rounded-lg aspect-[4/3] mb-4 items-center justify-center`}>
                {isCameraActive ? (
                  <View style={tw`items-center`}>
                    <Text>Camera Preview</Text>
                    <Text style={tw`text-xs text-gray-500`}>(Simulated)</Text>
                  </View>
                ) : (
                  <Camera size={64} color="#9ca3af" />
                )}
              </View>
              
              <View style={tw`items-center space-y-4`}>
                {!isCameraActive ? (
                  <TouchableOpacity
                    onPress={handleStartCamera}
                    style={tw`px-4 py-2 bg-finance-primary rounded-lg flex-row items-center`}
                  >
                    <Camera size={16} color="#ffffff" style={tw`mr-2`} />
                    <Text style={tw`text-white`}>Start Camera</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleTakePicture}
                    style={tw`w-14 h-14 bg-finance-primary rounded-full items-center justify-center`}
                  >
                    <Check size={24} color="#ffffff" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default CameraModal
