
import React, { useState } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Toaster } from 'react-native-hot-toast'
import { FinanceProvider } from '@/context/FinanceContext'
import { tw } from '@/utils/tailwind'

// Screens
import HomeScreen from './screens/HomeScreen'
import BudgetScreen from './screens/BudgetScreen'
import AccountsScreen from './screens/AccountsScreen'
import SettingsScreen from './screens/SettingsScreen'

// Components
import TabBar from './components/TabBar'
import TransactionModal from './components/TransactionModal'

const Tab = createBottomTabNavigator()

const App = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  return (
    <NavigationContainer>
      <FinanceProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={tw`flex-1 bg-background`}>
          <Tab.Navigator
            tabBar={(props) => (
              <TabBar
                {...props}
                onAddPress={() => setIsTransactionModalOpen(true)}
              />
            )}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Budget" component={BudgetScreen} />
            <Tab.Screen name="Accounts" component={AccountsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
          
          <TransactionModal 
            isOpen={isTransactionModalOpen} 
            onClose={() => setIsTransactionModalOpen(false)} 
          />
          
          <Toaster />
        </SafeAreaView>
      </FinanceProvider>
    </NavigationContainer>
  )
}

export default App
