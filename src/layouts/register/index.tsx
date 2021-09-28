import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
  name: string
  last_name: string
  date_of_birth: Date
}

export default ({}: Props): React.ReactElement => {
  const dispatch = useDispatch()

  const { loading } = useSelector((state: RootState) => clientState(state))
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSaveButtonPress = (data: FormData): void => {
    dispatch(create({ ...data }))
  }

  return (
    <View style={styles.container}>
      <Text>Register client</Text>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="name"
            value={value}
            onChangeText={text => onChange(text)}
            caption={errors.name?.message}
          />
        )}
      />
      <Controller
        name="last_name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="lastname"
            value={value}
            onChangeText={text => onChange(text)}
            caption={errors.last_name?.message}
          />
        )}
      />
      <Controller
        name="date_of_birth"
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
