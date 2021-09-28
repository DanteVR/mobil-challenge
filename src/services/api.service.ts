import axios from 'axios'

const BASE_URL = 'https://05a77dede5f5.ngrok.io/api/v1'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
