import showCodeMessage from '@/api/code'
import { formatJsonToUrlParams, type instanceObject } from '@/utils/format'
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
// import { ElMessage } from 'element-plus'

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL

// Create instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // TODO add the logic you want to deal with before requesting
    // TODO Such as loading, etc.
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data
    }
    /* TODO use ElMessage */
    console.info(JSON.stringify(response.status))
    return response
  },

  (error: AxiosError) => {
    const { response } = error
    if (response) {
      /* TODO use ElMessage */
      console.error(showCodeMessage(response.status))
      return Promise.reject(response.data)
    }
    /* TODO use ElMessage */
    console.warn('The network connection is abnormal, please try it later!')
    return Promise.reject(error)
  },
)

const service = {
  get<T = any> (url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data })
  },

  post<T = any> (url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data)
  },

  put<T = any> (url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data)
  },

  delete<T = any> (url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data)
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  download: (url: string, data: instanceObject) => {
    window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`
  },
}

export default service
