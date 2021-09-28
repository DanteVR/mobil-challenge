import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from '../screens/welcome.component'
import { RegisterScreen } from '../screens/register.component'

export type AppStackParamList = {
  Welcome: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator()

export const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
