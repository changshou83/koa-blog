import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { baseURL } from '@/api/config';
import { getToken } from './common/cache';

const instance = axios.create({
  timeout: 10000,
  baseURL: baseURL
})

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken()
  token && (config.headers!.authorization = `Bearer ${token}`)

  return config;
}, (err: AxiosError) =>  Promise.reject(err))

// 响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { status, data } = res
    if(status === 200) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  },
  (err: AxiosError) => Promise.reject(err.response!.data)
)

export const lazyRequest = <Arg = any>(request: Promise<Arg>, delay = 1000) => {
  const lazy = new Promise(resolve => setTimeout(resolve, delay));

  return Promise<Arg>.all([request, lazy])
}

export default instance
