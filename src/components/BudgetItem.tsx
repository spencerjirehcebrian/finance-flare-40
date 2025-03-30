
import React from 'react'
import { View, Text } from 'react-native'
import { Budget } from '@/types/finance'
import { formatCurrency, calculatePercentage } from '@/utils/formatters'
import { tw } from '@/utils/tailwind'

interface BudgetItemProps {
  budget: Budget
}

const BudgetItem: React.FC<BudgetItemProps> = ({ budget }) => {
  const { category, allocated, spent, color } = budget
  const percentage = calculatePercentage(spent, allocated)
  const remaining = allocated - spent
  
  return (
    <View style={tw`mb-4`}>
      <View style={tw`flex-row justify-between items-center mb-1`}>
        <Text style={tw`font-medium`}>{category}</Text>
        <Text style={tw`text-sm`}>{formatCurrency(remaining)} left</Text>
      </View>
      
      <View style={tw`h-2 rounded-full bg-gray-200 mb-1 overflow-hidden`}>
        <View 
          style={{
            ...tw`h-full rounded-full`,
            width: `${percentage}%`, 
            backgroundColor: color 
          }} 
        />
      </View>
      
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-xs text-gray-500`}>{formatCurrency(spent)} spent</Text>
        <Text style={tw`text-xs text-gray-500`}>{percentage}% of {formatCurrency(allocated)}</Text>
      </View>
    </View>
  )
}

export default BudgetItem
