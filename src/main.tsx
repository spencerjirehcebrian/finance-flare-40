
import { AppRegistry } from 'react-native'
import App from './App'

// Register the app
AppRegistry.registerComponent('FinanceFlare', () => App)

// For web compatibility
if (typeof document !== 'undefined') {
  const rootTag = document.getElementById('root')
  if (rootTag) {
    AppRegistry.runApplication('FinanceFlare', { rootTag })
  }
}
