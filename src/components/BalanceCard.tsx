
import React from 'react'
import { View, Text } from 'react-native'
import { useFinance } from '@/context/FinanceContext'
import { formatCurrency } from '@/utils/formatters'
import { tw } from '@/utils/tailwind'

const BalanceCard: React.FC = () => {
  const { totalBalance, totalIncome, totalExpenses } = useFinance()

  return (
    <View style={tw`bg-gradient-to-br from-finance-primary to-finance-accent rounded-xl p-4 shadow-lg mb-6`}>
      <Text style={tw`text-lg font-medium text-white opacity-90 mb-1`}>Total Balance</Text>
      <Text style={tw`text-3xl font-bold text-white mb-4`}>{formatCurrency(totalBalance)}</Text>
      
      <View style={tw`flex-row justify-between`}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white opacity-80`}>Income</Text>
          <Text style={tw`text-xl font-medium text-white`}>{formatCurrency(totalIncome)}</Text>
        </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white opacity-80`}>Expenses</Text>
          <Text style={tw`text-xl font-medium text-white`}>{formatCurrency(totalExpenses)}</Text>
        </View>
      </View>
    </View>
  )
}

export default BalanceCard
