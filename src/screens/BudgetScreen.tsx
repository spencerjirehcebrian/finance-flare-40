
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useFinance } from '@/context/FinanceContext'
import BudgetItem from '@/components/BudgetItem'
import { tw } from '@/utils/tailwind'

const BudgetScreen: React.FC = () => {
  const { budgets } = useFinance()

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`px-4 py-6`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Budget</Text>
        
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl font-semibold`}>Monthly Budgets</Text>
          </View>
          
          <View style={tw`bg-white rounded-xl shadow-sm p-4`}>
            {budgets.map((budget) => (
              <BudgetItem key={budget.id} budget={budget} />
            ))}
          </View>
        </View>
        
        <View>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl font-semibold`}>Budget Categories</Text>
          </View>
          
          <View style={tw`bg-white rounded-xl shadow-sm p-4`}>
            <Text style={tw`text-center text-gray-500 py-8`}>
              Charts and detailed analytics will be available in the future.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default BudgetScreen
