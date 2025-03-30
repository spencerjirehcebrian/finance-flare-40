
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useFinance } from '@/context/FinanceContext'
import AccountCard from '@/components/AccountCard'
import { tw } from '@/utils/tailwind'

const AccountsScreen: React.FC = () => {
  const { accounts } = useFinance()

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`px-4 py-6`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Accounts</Text>
        
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl font-semibold`}>Your Accounts</Text>
          </View>
          
          <View>
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </View>
        </View>
        
        <View>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl font-semibold`}>Account Activity</Text>
          </View>
          
          <View style={tw`bg-white rounded-xl shadow-sm p-4`}>
            <Text style={tw`text-center text-gray-500 py-8`}>
              Detailed account activity will be available in the future.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountsScreen
