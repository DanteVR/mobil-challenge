import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigation/app.navigator'
import ContentView from '../layouts/welcome'

export type Props = NativeStackScreenProps<AppStackParamList, 'Welcome'>

export const WelcomeScreen = (props: Props): React.ReactElement => {
  return <ContentView {...props} />
}
