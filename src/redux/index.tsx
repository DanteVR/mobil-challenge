import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
// Middleware
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
// Persist
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(persistedReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}
