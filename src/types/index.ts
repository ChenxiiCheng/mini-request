/**
 * Public type definations
 * 公共类型定义在这里
 */

/**
 * Request method的可选类型
 */
export type Method = 'get' | 'GET' | 'post' | 'POST' | 'head' | 'HEAD' | 'delete' | 'DELETE' | 'options' | 'OPTIONS' | 'put' | 'PUT' | 'patch' | 'PATCH'

/**
 * Axios Request的配置类型
 */
export type AxiosRequestConfig = {
  url: string
  method?: Method
  data?: any
  params?: any
}
