import { clientTypes as types } from '../types/client.types'

export interface ClientInterface {
  name: string
  last_name: string
  date_of_birth: Date
}

export interface CreateClientAction {
  type: typeof types.CREATE_CLIENT_REQUEST | typeof types.CREATE_CLIENT_SUCCESS
}

export type ClientActionsTypes = CreateClientAction

export function create(client: ClientInterface) {
  return {
    type: types.CREATE_CLIENT_REQUEST,
    payload: client
  }
}
