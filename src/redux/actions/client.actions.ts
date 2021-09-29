import { clientTypes as types } from '../types/client.types'

export interface ClientInterface {
  firstname: string
  lastname: string
  birthday: Date
}

export interface CreateClientAction {
  type: typeof types.CREATE_CLIENT_REQUEST | typeof types.CREATE_CLIENT_SUCCESS
  payload: ClientInterface
}

export type ClientActionsTypes = CreateClientAction

export function create(client: ClientInterface) {
  return {
    type: types.CREATE_CLIENT_REQUEST,
    payload: client
  }
}
