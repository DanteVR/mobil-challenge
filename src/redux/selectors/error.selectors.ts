import { createSelector } from 'reselect'
import { get } from 'lodash'

export const createErrorSelector = (fn: any) => {
  return createSelector(fn, storeIndex =>
    get(storeIndex, 'error.message', null)
  )
}
