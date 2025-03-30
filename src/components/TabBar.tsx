
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Home, PieChart, Plus, CreditCard, Settings } from 'lucide-react'
import { tw } from '@/utils/tailwind'

interface TabBarProps extends BottomTabBarProps {
  onAddPress: () => void
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation, onAddPress }) => {
  const icons = {
    Home: Home,
    Budget: PieChart,
    Accounts: CreditCard,
    Settings: Settings,
  }

  return (
    <View style={tw`flex-row justify-between items-center bg-white border-t border-gray-200 py-2 px-4`}>
      {state.routes.map((route, index) => {
        const isActive = state.index === index
        const Icon = icons[route.name as keyof typeof icons]
        
        // Skip the middle position for the FAB
        if (index === 2) {
          // Return an empty view to maintain spacing
          return <View key={route.key} style={tw`w-6`} />
        }
        
        // Adjust index for routes after the FAB
        const adjustedIndex = index > 2 ? index - 1 : index
        
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={tw`items-center`}
          >
            <Icon
              size={24}
              color={isActive ? '#0ea5e9' : '#6b7280'}
            />
            <Text
              style={tw`text-xs mt-1 ${isActive ? 'text-finance-primary font-medium' : 'text-gray-500'}`}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        )
      })}
      
      {/* FAB in the middle */}
      <TouchableOpacity
        onPress={onAddPress}
        style={tw`absolute bottom-2 left-[46%] w-14 h-14 rounded-full bg-finance-primary items-center justify-center shadow-lg`}
      >
        <Plus size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  )
}

export default TabBar
