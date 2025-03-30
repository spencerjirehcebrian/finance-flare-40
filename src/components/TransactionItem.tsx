
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowUpRight, ArrowDownRight, Receipt } from 'lucide-react'
import { Transaction } from '@/types/finance'
import { formatCurrency, formatShortDate } from '@/utils/formatters'
import { tw } from '@/utils/tailwind'

interface TransactionItemProps {
  transaction: Transaction
  onPress?: () => void
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onPress }) => {
  const { type, amount, description, category, date, receiptImage } = transaction
  
  const isExpense = type === 'expense'
  const isIncome = type === 'income'
  
  return (
    <TouchableOpacity 
      style={tw`flex-row items-center justify-between p-3 border-b border-gray-100`} 
      onPress={onPress}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`w-10 h-10 rounded-full items-center justify-center mr-3 ${isExpense ? 'bg-finance-expense/10' : 'bg-finance-income/10'}`}>
          {isExpense ? (
            <ArrowDownRight size={20} color="#ef4444" />
          ) : (
            <ArrowUpRight size={20} color="#22c55e" />
          )}
        </View>
        
        <View>
          <Text style={tw`font-medium`}>{description}</Text>
          <Text style={tw`text-sm text-gray-500`}>{category} • {formatShortDate(date)}</Text>
        </View>
      </View>
      
      <View style={tw`flex-row items-center`}>
        <Text style={tw`${isExpense ? 'text-finance-expense' : 'text-finance-income'} font-medium`}>
          {isExpense ? '-' : '+'}{formatCurrency(amount)}
        </Text>
        {receiptImage && (
          <Receipt size={16} style={tw`ml-2 text-gray-400`} />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default TransactionItem
