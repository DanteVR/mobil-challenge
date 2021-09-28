import { clientTypes as types } from '../types/client.types'
import { call, put, takeLatest } from '@redux-saga/core/effects'
import { CreateAction } from '../actions/client.actions'
import { store } from '../../services/client.service'
import { AxiosResponse } from 'axios'
import { errorAction } from '../actions/error.actions'

export function* create({ payload }: CreateAction) {
  try {
    const { data }: AxiosResponse = yield call(store, payload)
    yield put({ type: types.CREATE_CLIENT_SUCCESS, payload: data })
  } catch (error) {
    yield put(errorAction(types.CREATE_CLIENT_FAILURE, error))
  }
}

export function* watchClient() {
  yield takeLatest(types.CREATE_CLIENT_REQUEST, create)
}
