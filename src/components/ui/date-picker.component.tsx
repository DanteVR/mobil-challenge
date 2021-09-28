import React, { useState } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

interface DatePickerProps {
  label?: string
  value?: Date
  onChange: (value: any) => void
}

export const DatePicker = (props: DatePickerProps) => {
  const { onChange, label, value = new Date() } = props
  const [show, setShow] = useState(false)

  const onChangePicker = (event: any, date: any) => {
    if (Platform.OS === 'android') {
      setShow(false)
    }
    if (event.type !== 'dismissed') {
      onChange(date)
    }
  }

  return (
    <>
      <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.inputDate}
          activeOpacity={0.8}>
          <Text>{moment(value).format('DD/MM/YYYY')}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={value}
          mode={'date'}
          onChange={onChangePicker}
          maximumDate={new Date()}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  inputDate: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    minHeight: 40,
    paddingHorizontal: 16
  },
  label: {
    marginBottom: 12
  }
})
