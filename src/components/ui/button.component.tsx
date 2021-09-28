import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  loading?: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={props.onPress}>
      {props.loading && (
        <ActivityIndicator style={styles.loading} color={'#fff'} />
      )}
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    marginVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1c729e'
  },
  loading: {
    marginRight: 12
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
