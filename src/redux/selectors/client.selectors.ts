import { get } from 'lodash'
import { RootState } from '../reducers'
import { ClientState } from '../reducers/client.reducer'
import { createErrorSelector } from './error.selectors'

export const clientState = (state: RootState): ClientState => {
  return get(state, 'client')
}

export const getClientError = createErrorSelector(
  (state: RootState) => state.client
)
