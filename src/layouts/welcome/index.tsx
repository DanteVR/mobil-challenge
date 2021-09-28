import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Props } from '../../screens/welcome.component'

export default ({ navigation }: Props): React.ReactElement => {
  const onRegisterButtonPress = (): void => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to my challenge</Text>
      <TouchableOpacity onPress={onRegisterButtonPress}>
        <Text>Press to create a client</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
