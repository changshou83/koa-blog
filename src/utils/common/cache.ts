import { UserInfo } from '@/types'

const tokenPrefix = 'koa_blog_token'
const userPrefix = 'koa_blog_user'

// token storage
export function setToken(token: string) {
  localStorage.setItem(tokenPrefix, token)
  return token
}

export function getToken() {
  return localStorage.getItem(tokenPrefix) || ''
}

export function removeToken() {
  localStorage.removeItem(tokenPrefix)
}

// userInfo storage
export function setUserInfo(userInfo: UserInfo) {
  localStorage.setItem(userPrefix, JSON.stringify(userInfo))
  return userInfo
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem(userPrefix) || '{}')
}

export function removeUserInfo() {
  localStorage.removeItem(userPrefix)
}
