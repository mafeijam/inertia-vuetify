import axios from 'axios'

axios.interceptors.request.use(config => {
  sessionStorage.removeItem('flash.shown')
  return config
}, error => Promise.reject(error))
