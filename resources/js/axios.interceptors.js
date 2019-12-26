import axios from 'axios'

axios.interceptors.request.use(config => {
  sessionStorage.removeItem('flash.shown')
  return config
}, error => {
  return Promise.reject(error);
})
