import { api } from './api.service'
import { ClientInterface } from '../redux/actions/client.actions'
import moment from 'moment'

export const store = ({ firstname, lastname, birthday }: ClientInterface) => {
  const data = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    birthday: moment(birthday).format('YYYY-MM-DD')
  }
  return api.post('/customers/store', data)
}
