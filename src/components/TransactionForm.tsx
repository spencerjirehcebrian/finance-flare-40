
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Check, X } from 'lucide-react'
import { useFinance } from '@/context/FinanceContext'
import { TransactionType } from '@/types/finance'
import { toast } from 'react-native-hot-toast'
import { tw } from '@/utils/tailwind'

interface TransactionFormProps {
  onClose: () => void
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onClose }) => {
  const { addTransaction } = useFinance()
  
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState<TransactionType>('expense')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  
  const handleSubmit = () => {
    if (!amount || !description || !category) {
      toast.error("Please fill in all required fields")
      return
    }
    
    const numAmount = parseFloat(amount)
    
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }
    
    addTransaction({
      amount: numAmount,
      description,
      category,
      type,
      date,
    })
    
    toast.success("Transaction added successfully")
    onClose()
  }
  
  return (
    <View style={tw`space-y-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>Add Transaction</Text>
      
      <View style={tw`flex-row rounded-lg overflow-hidden mb-4`}>
        <TouchableOpacity
          style={tw`flex-1 py-2 items-center ${type === 'expense' ? 'bg-finance-expense' : 'bg-gray-200'}`}
          onPress={() => setType('expense')}
        >
          <Text style={tw`${type === 'expense' ? 'text-white' : 'text-gray-700'}`}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 py-2 items-center ${type === 'income' ? 'bg-finance-income' : 'bg-gray-200'}`}
          onPress={() => setType('income')}
        >
          <Text style={tw`${type === 'income' ? 'text-white' : 'text-gray-700'}`}>Income</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={tw`text-sm font-medium mb-1`}>Amount</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="0.00"
          value={amount}
          onChangeText={setAmount}
          style={tw`w-full p-2 border border-gray-300 rounded-lg`}
        />
      </View>
      
      <View>
        <Text style={tw`text-sm font-medium mb-1`}>Description</Text>
        <TextInput
          placeholder="What was this for?"
          value={description}
          onChangeText={setDescription}
          style={tw`w-full p-2 border border-gray-300 rounded-lg`}
        />
      </View>
      
      <View>
        <Text style={tw`text-sm font-medium mb-1`}>Category</Text>
        <TextInput
          placeholder="e.g. Food, Transportation"
          value={category}
          onChangeText={setCategory}
          style={tw`w-full p-2 border border-gray-300 rounded-lg`}
        />
      </View>
      
      <View>
        <Text style={tw`text-sm font-medium mb-1`}>Date</Text>
        <TextInput
          value={date}
          onChangeText={setDate}
          style={tw`w-full p-2 border border-gray-300 rounded-lg`}
        />
      </View>
      
      <View style={tw`flex-row space-x-2 pt-4`}>
        <TouchableOpacity
          style={tw`flex-1 py-2 border border-gray-300 rounded-lg flex-row items-center justify-center`}
          onPress={onClose}
        >
          <X size={16} style={tw`mr-1`} />
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 py-2 bg-finance-primary rounded-lg flex-row items-center justify-center`}
          onPress={handleSubmit}
        >
          <Check size={16} style={tw`mr-1 text-white`} />
          <Text style={tw`text-white`}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransactionForm
