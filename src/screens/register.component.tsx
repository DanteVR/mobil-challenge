import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigation/app.navigator'
import ContentView from '../layouts/register'

export type Props = NativeStackScreenProps<AppStackParamList, 'Register'>

export const RegisterScreen = (props: Props): React.ReactElement => {
  return <ContentView {...props} />
}
