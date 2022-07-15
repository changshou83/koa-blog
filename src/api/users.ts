import { UserInfo, LoginForm, ResponseConfig } from '@/types';

/**
 * 用户登录
 * @param params 登录表单
 * @returns 
 */
export function userLogin(params: LoginForm): Promise<ResponseConfig<UserInfo | string>> {
  const { username, password } = params

  if(username && password) {
    return http.post('/users/login', params)
  } else {
    const result = { status: -1, msg: '用户名或密码错误', data: '' }
    return Promise.resolve(result)
  }
}
