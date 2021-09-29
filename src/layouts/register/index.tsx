import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './extra/schema'
import { Input, Button, DatePicker } from '../../components/ui'
import { create } from '../../redux/actions/client.actions'
import { RootState } from '../../redux/reducers'
import { clientState } from '../../redux/selectors/client.selectors'
import { Props } from '../../screens/register.component'

type FormData = {
  firstname: string
  lastname: string
  birthday: Date
}

export default ({}: Props): React.ReactElement => {
  const dispatch = useDispatch()

  const { loading, response } = useSelector((state: RootState) =>
    clientState(state)
  )
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  useEffect(() => {
    if (!loading && response) {
      ToastAndroid.show(
        `Success: ${JSON.stringify(response)}`,
        ToastAndroid.LONG
      )
    }
  }, [loading, response])

  const onSaveButtonPress = (data: FormData): void => {
    dispatch(create({ ...data }))
  }

  return (
    <View style={styles.container}>
      <Text>Register client</Text>
      <Controller
        name="firstname"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="name"
            value={value}
            maxLength={32}
            onChangeText={text => onChange(text)}
            caption={errors.firstname?.message}
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="lastname"
            value={value}
            maxLength={32}
            onChangeText={text => onChange(text)}
            caption={errors.lastname?.message}
          />
        )}
      />
      <Controller
        name="birthday"
        defaultValue={new Date()}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Date of birth"
            onChange={date => onChange(date)}
            value={value}
          />
        )}
      />
      <Button
        title={'Save'}
        onPress={handleSubmit(onSaveButtonPress)}
        loading={loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})
