export interface ErrorInterface {
  statusCode: number
  error: string
  message: string | string[]
}

export function errorAction(errorType: any, error: ErrorInterface | unknown) {
  return {
    type: errorType,
    error: true,
    payload: error
  }
}
