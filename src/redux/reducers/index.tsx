import { combineReducers } from 'redux'
import clientReducer from './client.reducer'

export const rootReducer = combineReducers({
  client: clientReducer
})

export type RootState = ReturnType<typeof rootReducer>
