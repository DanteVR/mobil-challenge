import { all } from 'redux-saga/effects'
import { watchClient } from './client.sagas'

export default function* rootSaga() {
  yield all([watchClient()])
}
