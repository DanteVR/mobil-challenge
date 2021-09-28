import * as yup from 'yup'
export const schema = yup.object().shape({
  name: yup.string().required().label('Name'),
  last_name: yup.string().required().label('Lastname'),
  date_of_birth: yup.date().required()
})
