import * as yup from 'yup'
export const schema = yup.object().shape({
  firstname: yup.string().required().label('Name'),
  lastname: yup.string().required().label('Lastname'),
  birthday: yup.date().required().label('Birthday')
})
