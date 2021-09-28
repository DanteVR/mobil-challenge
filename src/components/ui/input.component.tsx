import React from 'react'
import { View, StyleSheet, TextInput, TextInputProps, Text } from 'react-native'

interface InputProps extends TextInputProps {
  caption?: string
}

export const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput style={styles.input} {...props} />
      {props.caption && <Text style={styles.caption}>{props.caption}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    marginVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16
  },
  caption: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})
