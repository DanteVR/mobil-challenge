import { api } from './api.service'
import { ClientInterface } from '../redux/actions/client.actions'

export const store = (params: ClientInterface) => {
  return api.post('/client', params)
}
