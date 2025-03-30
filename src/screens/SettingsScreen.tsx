
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronRight, Bell, Shield, Moon, CreditCard, HelpCircle, LogOut } from 'lucide-react'
import { tw } from '@/utils/tailwind'

interface SettingItemProps {
  icon: React.ReactNode
  title: string
  description?: string
  onPress?: () => void
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, description, onPress }) => (
  <TouchableOpacity 
    style={tw`flex-row items-center justify-between p-4 border-b border-gray-100`}
    onPress={onPress}
  >
    <View style={tw`flex-row items-center`}>
      <View style={tw`w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3`}>
        {icon}
      </View>
      <View>
        <Text style={tw`font-medium`}>{title}</Text>
        {description && <Text style={tw`text-sm text-gray-500`}>{description}</Text>}
      </View>
    </View>
    <ChevronRight size={20} color="#9ca3af" />
  </TouchableOpacity>
)

const SettingsScreen: React.FC = () => {
  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`px-4 py-6`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Settings</Text>
        
        <View style={tw`bg-white rounded-xl shadow-sm overflow-hidden mb-6`}>
          <SettingItem 
            icon={<Bell size={20} color="#0ea5e9" />}
            title="Notifications"
            description="Manage your alerts and notifications"
          />
          
          <SettingItem 
            icon={<Shield size={20} color="#0ea5e9" />}
            title="Security"
            description="Protect your financial data"
          />
          
          <SettingItem 
            icon={<Moon size={20} color="#0ea5e9" />}
            title="Appearance"
            description="Dark mode and theme settings"
          />
          
          <SettingItem 
            icon={<CreditCard size={20} color="#0ea5e9" />}
            title="Payment Methods"
            description="Manage your cards and accounts"
          />
        </View>
        
        <View style={tw`bg-white rounded-xl shadow-sm overflow-hidden`}>
          <SettingItem 
            icon={<HelpCircle size={20} color="#0ea5e9" />}
            title="Help & Support"
            description="Get assistance and answers"
          />
          
          <SettingItem 
            icon={<LogOut size={20} color="#0ea5e9" />}
            title="Log Out"
            description="Sign out of your account"
          />
        </View>
        
        <Text style={tw`text-center text-gray-400 text-xs mt-6`}>
          Finance Flare v1.0.0
        </Text>
      </View>
    </ScrollView>
  )
}

export default SettingsScreen
