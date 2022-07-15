import * as Cache from "@/utils/common/cache"

describe('cache', () => {
  it('should be defined', () => {
    expect(Cache).toBeDefined()
  })
  
  it('token storage should work', () => {
    const tokenPrefix = 'koa_blog_token'
    const token = 'token'
    
    Cache.setToken(token)
    expect(localStorage.getItem(tokenPrefix)).toStrictEqual(token)

    expect(Cache.getToken()).toStrictEqual(token)

    Cache.removeToken()
    expect(localStorage.getItem(tokenPrefix)).toBeNull()
  })
})
