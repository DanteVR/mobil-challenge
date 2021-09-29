import { clientTypes } from '../types/client.types'
import { ClientActionsTypes } from '../actions/client.actions'
import { ErrorInterface } from '../actions/error.actions'
import errorReducer from './error.reducer'

export interface ClientState {
  loading: boolean
  response: any
  error: ErrorInterface | null
}

const initialState = {
  loading: false,
  response: null,
  error: null
}

export default (
  state: ClientState = initialState,
  action: ClientActionsTypes
) => {
  switch (action.type) {
    case clientTypes.CREATE_CLIENT_REQUEST:
      return {
        ...errorReducer(state, action),
        loading: true,
        response: null
      }
    case clientTypes.CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null
      }
    case clientTypes.CREATE_CLIENT_FAILURE:
      return {
        ...errorReducer(state, action),
        loading: false,
        response: null
      }
    default:
      return state
  }
}
