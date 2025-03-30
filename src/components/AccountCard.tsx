
import React from 'react'
import { View, Text } from 'react-native'
import { Account } from '@/types/finance'
import { formatCurrency } from '@/utils/formatters'
import { CreditCard, Wallet, PiggyBank, TrendingUp } from 'lucide-react'
import { tw } from '@/utils/tailwind'

interface AccountCardProps {
  account: Account
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const { name, balance, type, color } = account
  
  const getIcon = () => {
    switch (type) {
      case 'checking':
        return <Wallet size={20} color="#ffffff" />
      case 'savings':
        return <PiggyBank size={20} color="#ffffff" />
      case 'credit':
        return <CreditCard size={20} color="#ffffff" />
      case 'investment':
        return <TrendingUp size={20} color="#ffffff" />
      default:
        return <Wallet size={20} color="#ffffff" />
    }
  }
  
  return (
    <View 
      style={{
        ...tw`rounded-xl p-4 mb-3 shadow-sm`,
        backgroundColor: `${color}10`
      }}
    >
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          <View 
            style={{
              ...tw`w-8 h-8 rounded-full items-center justify-center mr-3`,
              backgroundColor: color
            }}
          >
            {getIcon()}
          </View>
          <View>
            <Text style={tw`font-medium`}>{name}</Text>
            <Text style={tw`text-sm text-gray-500`}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          </View>
        </View>
        <Text style={tw`font-bold`}>{formatCurrency(balance)}</Text>
      </View>
    </View>
  )
}

export default AccountCard
