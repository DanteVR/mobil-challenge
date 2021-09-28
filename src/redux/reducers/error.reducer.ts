export default (state: any, action: any) => {
  if (!action.error) {
    return {
      ...state,
      error: null
    }
  }
  return {
    ...state,
    error: {
      message: 'Error',
      ...action.payload?.response.data
    }
  }
}
