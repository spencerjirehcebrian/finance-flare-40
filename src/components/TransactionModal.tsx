
import React from 'react'
import { View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import { X } from 'lucide-react'
import TransactionForm from './TransactionForm'
import { tw } from '@/utils/tailwind'

interface TransactionModalProps {
  isOpen: boolean
  onClose: () => void
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
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
                <TouchableOpacity onPress={onClose} style={tw`p-1`}>
                  <X size={20} color="#6b7280" />
                </TouchableOpacity>
              </View>
              <TransactionForm onClose={onClose} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default TransactionModal
