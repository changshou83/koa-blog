const tokenPrefix = 'koa_blog_token'

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
