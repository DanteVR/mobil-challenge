import axios from 'axios'

const BASE_URL = 'http://167.71.169.167:5001'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
