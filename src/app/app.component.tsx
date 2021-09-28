import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from '../components/ui'
import { AppNavigator } from '../navigation/app.navigator'
import { Provider } from 'react-redux'
import { configureStore } from '../redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

const store = configureStore()
const persistor = persistStore(store)

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar />
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
