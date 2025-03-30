
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Camera } from 'lucide-react'
import { useFinance } from '@/context/FinanceContext'
import { tw } from '@/utils/tailwind'
import { toast } from 'react-native-hot-toast'

// Components
import BalanceCard from '@/components/BalanceCard'
import TransactionItem from '@/components/TransactionItem'
import CameraModal from '@/components/CameraModal'

const HomeScreen: React.FC = () => {
  const { transactions } = useFinance()
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false)
  
  const recentTransactions = transactions.slice(0, 5)

  const handleCaptureReceipt = (imageData: string) => {
    toast.success("Receipt Captured")
  }
  
  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`px-4 py-6`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Finance Flare</Text>
        
        <BalanceCard />
        
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-xl font-semibold`}>Recent Transactions</Text>
          <TouchableOpacity
            onPress={() => setIsCameraModalOpen(true)}
            style={tw`flex-row items-center`}
          >
            <Camera size={20} style={tw`mr-1 text-finance-primary`} />
            <Text style={tw`text-sm text-finance-primary`}>Scan Receipt</Text>
          </TouchableOpacity>
        </View>
        
        <View style={tw`bg-white rounded-xl shadow-sm overflow-hidden`}>
          {recentTransactions.length > 0 ? (
            recentTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
              />
            ))
          ) : (
            <Text style={tw`p-4 text-center text-gray-500`}>No transactions yet</Text>
          )}
        </View>
        
        <CameraModal 
          isOpen={isCameraModalOpen} 
          onClose={() => setIsCameraModalOpen(false)} 
          onCapture={handleCaptureReceipt}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
