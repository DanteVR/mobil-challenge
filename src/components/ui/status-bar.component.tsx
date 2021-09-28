import React from 'react'
import {
  StatusBar as RNStatusBar,
  StatusBarProps as StatusBarProps
} from 'react-native'

export const StatusBar = (props: StatusBarProps) => {
  return <RNStatusBar {...props} />
}
